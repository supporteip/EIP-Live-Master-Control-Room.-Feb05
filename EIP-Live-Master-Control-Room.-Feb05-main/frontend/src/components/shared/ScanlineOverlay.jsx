import React from 'react';

export const ScanlineOverlay = () => {
    return (
        <div 
            className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
            aria-hidden="true"
        >
            {/* Moving scanlines */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        hsl(187 100% 50% / 0.1) 2px,
                        hsl(187 100% 50% / 0.1) 4px
                    )`,
                    animation: 'scanlines 20s linear infinite'
                }}
            />
            
            {/* Flicker effect */}
            <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    background: 'linear-gradient(transparent 50%, rgba(0, 229, 255, 0.02) 50%)',
                    backgroundSize: '100% 4px',
                    animation: 'flicker 0.15s infinite'
                }}
            />
        </div>
    );
};

export default ScanlineOverlay;
