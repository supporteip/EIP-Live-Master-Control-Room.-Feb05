import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { HUDButton } from '@/components/shared/HUDButton';
import { PageTransition } from '@/components/shared/PageTransition';

const Stage3Compound = () => {
    const navigate = useNavigate();

    const handleProceed = () => {
        navigate('/stage4');
    };

    const handleBack = () => {
        navigate('/stage2');
    };

    return (
        <Layout>
            {/* Video Background - new video for compound */}
            <VideoBackground 
                src="/videos/1_1.mp4" 
                fallbackText="1_1.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/60" />

            {/* Content */}
            <PageTransition>
                <div className="fixed inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="text-center space-y-8 animate-slide-up">
                        {/* Main Title - strictly on one line */}
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-wider whitespace-nowrap">
                            BROADCAST COMPOUND
                        </h1>

                        {/* Subtitle */}
                        <p className="font-mono-tech text-xl md:text-2xl text-secondary text-glow-orange tracking-widest">
                            Primary Entry Point
                        </p>

                        {/* Decorative elements */}
                        <div className="flex items-center justify-center gap-4 py-4">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-secondary" />
                            <div className="w-4 h-4 border-2 border-secondary rotate-45" />
                            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-secondary" />
                        </div>

                        {/* Status indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">PERIMETER SECURE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">BROADCAST READY</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">UPLINK ACTIVE</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                            <HUDButton 
                                variant="ghost" 
                                size="default"
                                onClick={handleBack}
                            >
                                ← BACK
                            </HUDButton>
                            <HUDButton 
                                variant="orange" 
                                size="lg"
                                onClick={handleProceed}
                            >
                                PROCEED TO PCR SECURITY GATE
                            </HUDButton>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </Layout>
    );
};

export default Stage3Compound;
