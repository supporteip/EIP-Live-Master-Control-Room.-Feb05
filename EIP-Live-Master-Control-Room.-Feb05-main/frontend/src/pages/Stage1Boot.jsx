import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { HUDButton } from '@/components/shared/HUDButton';
import { PageTransition } from '@/components/shared/PageTransition';

const Stage1Boot = () => {
    const navigate = useNavigate();

    const handleCommence = () => {
        navigate('/stage2');
    };

    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/1.mp4" 
                fallbackText="1.mp4 MISSING" 
            />

            {/* Dark overlay for readability */}
            <div className="fixed inset-0 z-10 bg-background/60" />

            {/* Content */}
            <PageTransition>
                <div className="fixed inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="text-center space-y-8 animate-slide-up">
                        {/* Main Title */}
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-wider">
                            APPROACHING STADIUM
                        </h1>

                        {/* Subtitle */}
                        <p className="font-mono-tech text-xl md:text-2xl text-primary text-glow-cyan tracking-widest">
                            EIP Master Control Room
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
                            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <HUDButton 
                                variant="cyan" 
                                size="lg"
                                onClick={handleCommence}
                                className="text-xl"
                            >
                                COMMENCE WALKTHROUGH
                            </HUDButton>
                        </div>

                        {/* System status indicators */}
                        <div className="flex items-center justify-center gap-8 pt-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">SYSTEMS ONLINE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">FEED ACTIVE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </PageTransition>
        </Layout>
    );
};

export default Stage1Boot;
