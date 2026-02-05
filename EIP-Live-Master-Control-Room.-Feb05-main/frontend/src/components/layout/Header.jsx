import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const Header = () => {
    const [time, setTime] = useState(new Date());
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        // Future: Toggle ambient sound
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 bg-background/90 backdrop-blur-md border-b border-primary/30">
            {/* Logo - Left side (120px wide as per spec) */}
            <div className="flex items-center">
                <img 
                    src="/images/EnsembleIncOnlyLogoWhite.png" 
                    alt="EIP Logo"
                    className="w-[100px] md:w-[120px] h-auto object-contain"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <div 
                    className="items-center gap-2"
                    style={{ display: 'none' }}
                    id="logo-fallback"
                >
                    <span className="font-display text-3xl md:text-4xl font-bold text-primary text-glow-cyan tracking-wider">
                        EIP
                    </span>
                </div>
            </div>

            {/* Right side - Mute button + Clock */}
            <div className="flex items-center gap-4">
                {/* Mute/Unmute button */}
                <button
                    onClick={toggleMute}
                    className="w-10 h-10 flex items-center justify-center border border-primary/30 hover:border-primary bg-background/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted ? (
                        <VolumeX className="w-5 h-5 text-muted-foreground" />
                    ) : (
                        <Volume2 className="w-5 h-5 text-primary" />
                    )}
                </button>

                {/* Digital Clock */}
                <div className="flex items-center">
                    <span className="font-mono-tech text-2xl md:text-3xl text-primary text-glow-cyan tracking-wider">
                        {formatTime(time)}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
