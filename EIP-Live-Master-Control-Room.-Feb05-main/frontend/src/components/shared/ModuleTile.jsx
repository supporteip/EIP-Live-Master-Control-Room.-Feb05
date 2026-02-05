import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export const ModuleTile = ({ 
    name, 
    videoSrc, 
    onClick,
    showOnAir = false,
    isProminent = false,
    className 
}) => {
    const [videoError, setVideoError] = useState(false);

    return (
        <button
            onClick={onClick}
            className={cn(
                "relative aspect-video w-full overflow-hidden border-2 border-primary/40 bg-card",
                "cursor-pointer group transition-all duration-300 ease-out",
                "hover:border-primary hover:shadow-cyan-intense hover-lift",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                "active:scale-[0.98]",
                isProminent && "scale-[1.02] border-primary/60",
                className
            )}
        >
            {/* Video background or fallback */}
            {videoSrc && !videoError ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={() => setVideoError(true)}
                />
            ) : (
                <div className="absolute inset-0 bg-card signal-lost-pattern" />
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10" />

            {/* Module name */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-cyan tracking-widest">
                    {name}
                </span>
            </div>

            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* ON AIR indicator (only for specified tiles) */}
            {showOnAir && (
                <div className="absolute top-3 right-3 flex items-center gap-2 bg-destructive/90 px-2 py-1 rounded z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground animate-recording" />
                    <span className="font-mono-tech text-xs text-foreground font-bold tracking-wider">ON AIR</span>
                </div>
            )}

            {/* Status indicator (shown when no ON AIR badge) */}
            {!showOnAir && (
                <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono-tech text-xs text-primary/80">ONLINE</span>
                </div>
            )}
        </button>
    );
};

export default ModuleTile;
