import React from 'react';

export const FaceRecognitionReticle = () => {
    return (
        <div className="relative w-[400px] h-[400px] glass-tile rounded-lg overflow-hidden">
            {/* Scanning overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 h-1 bg-gradient-to-b from-primary/50 to-transparent animate-scan-line" />
            </div>

            {/* Outer rotating ring */}
            <div className="absolute inset-4 border-2 border-primary/40 rounded-full animate-rotate-slow" />

            {/* Pulsing concentric circles */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Circle 1 - Innermost */}
                <div className="absolute w-16 h-16 border-2 border-primary rounded-full animate-pulse-ring" 
                    style={{ animationDelay: '0s' }} 
                />
                
                {/* Circle 2 */}
                <div className="absolute w-32 h-32 border-2 border-primary/80 rounded-full animate-pulse-expand" 
                    style={{ animationDelay: '0s' }} 
                />
                
                {/* Circle 3 */}
                <div className="absolute w-32 h-32 border-2 border-primary/60 rounded-full animate-pulse-expand" 
                    style={{ animationDelay: '0.5s' }} 
                />
                
                {/* Circle 4 */}
                <div className="absolute w-32 h-32 border-2 border-primary/40 rounded-full animate-pulse-expand" 
                    style={{ animationDelay: '1s' }} 
                />
                
                {/* Circle 5 - Outermost */}
                <div className="absolute w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse-expand" 
                    style={{ animationDelay: '1.5s' }} 
                />
            </div>

            {/* Crosshair overlay */}
            <div className="absolute inset-0 flex items-center justify-center animate-crosshair-pulse">
                {/* Horizontal line */}
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                {/* Vertical line */}
                <div className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent" />
                
                {/* Center dot */}
                <div className="absolute w-4 h-4 border-2 border-primary bg-primary/30 rounded-full" />
            </div>

            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary" />

            {/* Status text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="font-mono-tech text-primary text-xs text-glow-cyan tracking-widest">
                    FACE RECOGNITION ACTIVE
                </span>
            </div>

            {/* Top status */}
            <div className="absolute top-8 left-0 right-0 text-center">
                <span className="font-mono-tech text-primary text-xs text-glow-cyan tracking-widest">
                    SCANNING...
                </span>
            </div>
        </div>
    );
};

export default FaceRecognitionReticle;
