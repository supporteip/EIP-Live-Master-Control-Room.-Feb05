import React from 'react';
import { cn } from '@/lib/utils';
import { HUDButton } from './HUDButton';

export const AccessOverlay = ({ 
    type = 'granted', 
    onClose, 
    showReportButton = false,
    onReport 
}) => {
    const isGranted = type === 'granted';

    return (
        <div 
            className={cn(
                "fixed inset-0 z-[100] flex flex-col items-center justify-center animate-fade-in",
                isGranted ? "bg-success/90" : "bg-destructive/90"
            )}
        >
            {/* Large status icon */}
            <div className={cn(
                "mb-8 w-32 h-32 rounded-full border-4 flex items-center justify-center",
                isGranted ? "border-foreground glow-green" : "border-foreground glow-red"
            )}>
                {isGranted ? (
                    <svg className="w-16 h-16 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="w-16 h-16 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </div>

            {/* Status text */}
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground tracking-wider mb-4">
                {isGranted ? 'ACCESS GRANTED' : 'ACCESS DENIED'}
            </h1>

            {/* Subtitle */}
            <p className="font-mono-tech text-foreground/90 text-xl tracking-wider">
                {isGranted ? 'IDENTITY VERIFIED' : 'AUTHENTICATION FAILED'}
            </p>

            {/* Report button for denied state */}
            {!isGranted && showReportButton && (
                <div className="mt-12">
                    <HUDButton 
                        variant="ghost" 
                        size="lg"
                        onClick={onReport}
                        className="border-foreground text-foreground hover:bg-foreground/20"
                    >
                        REPORT TO PRODUCTION
                    </HUDButton>
                </div>
            )}
        </div>
    );
};

export default AccessOverlay;
