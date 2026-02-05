import React, { useState } from 'react';

export const VideoBackground = ({ src, fallbackText }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className="fixed inset-0 z-0 bg-background">
                {/* Retro terminal signal lost */}
                <div className="absolute inset-0 signal-lost-pattern" />
                <div className="absolute bottom-32 left-6 text-left">
                    <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-primary text-sm text-glow-cyan">
                            SIGNAL LOST
                        </span>
                        <span className="w-2 h-4 bg-primary animate-blink" />
                    </div>
                    <div className="font-mono-tech text-primary/70 text-xs mt-1">
                        {fallbackText || `${src} MISSING`}
                    </div>
                    <div className="font-mono-tech text-primary/50 text-xs mt-2">
                        {'>'} AWAITING SIGNAL ACQUISITION...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <video
            className="fixed inset-0 z-0 w-full h-full object-cover"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setHasError(true)}
        />
    );
};

export default VideoBackground;
