import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/shared/PageTransition';
import { ModuleTile } from '@/components/shared/ModuleTile';
import { HUDButton } from '@/components/shared/HUDButton';

const MODULES = [
    { name: 'EDUCATION', videoSrc: '/videos/EDUCATION.mp4', route: '/education', showOnAir: true, isProminent: true },
    { name: 'EXECUTION', videoSrc: '/videos/EXECUTION.mp4', route: '/execution', showOnAir: false, isProminent: false },
    { name: 'ENTERTAINMENT', videoSrc: '/videos/ENTERTAINMENT.mp4', route: '/entertainment', showOnAir: false, isProminent: false },
    { name: 'EXECUTIVES', videoSrc: '/videos/EXECUTIVES.mp4', route: '/executives', showOnAir: false, isProminent: false },
    { name: 'ENSEMBLE', videoSrc: '/videos/ENSEMBLE.mp4', route: '/ensemble', showOnAir: false, isProminent: false },
    { name: 'ENGAGE', videoSrc: '/videos/ENGAGE.mp4', route: '/engage', showOnAir: false, isProminent: false },
];

const Stage5Multiviewer = () => {
    const navigate = useNavigate();

    const handleModuleClick = (route) => {
        navigate(route);
    };

    const handleBack = () => {
        navigate('/stage4');
    };

    return (
        <Layout>
            {/* Black background - no video */}
            <div className="fixed inset-0 z-0 bg-background" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-24 pb-20 px-4 md:px-8">
                    {/* Header section */}
                    <div className="text-center mb-8 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wider mb-4">
                            MCR MULTIVIEWER
                        </h1>
                        <p className="font-mono-tech text-lg md:text-xl text-primary text-glow-cyan tracking-widest">
                            6E PROTOCOL
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                            <div className="w-3 h-3 rotate-45 border-2 border-primary animate-pulse" />
                            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                        </div>

                        {/* Status bar */}
                        <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">ALL FEEDS ONLINE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">6 MODULES ACTIVE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                <span className="font-mono-tech text-sm text-muted-foreground">STANDBY MODE</span>
                            </div>
                        </div>
                    </div>

                    {/* 3x2 Grid of module tiles */}
                    <div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto"
                        style={{ animationDelay: '0.2s' }}
                    >
                        {MODULES.map((module, index) => (
                            <div 
                                key={module.name}
                                className="animate-fade-in"
                                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                            >
                                <ModuleTile
                                    name={module.name}
                                    videoSrc={module.videoSrc}
                                    showOnAir={module.showOnAir}
                                    isProminent={module.isProminent}
                                    onClick={() => handleModuleClick(module.route)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Back button */}
                    <div className="flex justify-center mt-8">
                        <HUDButton 
                            variant="ghost" 
                            size="default"
                            onClick={handleBack}
                        >
                            ← BACK TO SECURITY GATE
                        </HUDButton>
                    </div>
                </div>
            </PageTransition>
        </Layout>
    );
};

export default Stage5Multiviewer;
