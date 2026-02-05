import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const interval = 20; // Update every 20ms
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsVisible(false);
                        if (onComplete) onComplete();
                    }, 300);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
            {/* Terminal cursor effect */}
            <div className="mb-8 flex items-center">
                <span className="font-mono-tech text-lg md:text-2xl text-primary text-glow-cyan tracking-wider">
                    INITIALIZING SECURE ASSET PROTOCOL
                </span>
                <span className="ml-1 w-3 h-6 bg-primary animate-pulse" />
            </div>

            {/* Progress bar */}
            <div className="w-64 md:w-96">
                <div className="w-full h-2 bg-muted border border-primary/30 overflow-hidden">
                    <div 
                        className="h-full bg-primary transition-all duration-100 ease-linear glow-cyan"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="flex justify-between mt-2">
                    <span className="font-mono-tech text-xs text-muted-foreground">LOADING</span>
                    <span className="font-mono-tech text-xs text-primary">{Math.round(progress)}%</span>
                </div>
            </div>

            {/* System status messages */}
            <div className="mt-8 text-center">
                <p className="font-mono-tech text-xs text-muted-foreground animate-pulse">
                    {progress < 30 && '> Establishing connection...'}
                    {progress >= 30 && progress < 60 && '> Verifying credentials...'}
                    {progress >= 60 && progress < 90 && '> Loading broadcast modules...'}
                    {progress >= 90 && '> System ready...'}
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
