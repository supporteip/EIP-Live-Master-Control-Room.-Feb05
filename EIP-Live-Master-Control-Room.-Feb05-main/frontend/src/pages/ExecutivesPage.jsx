import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';
import { FloatingHomeButton } from '@/components/shared/FloatingHomeButton';

const CREW_ROLES = [
    { title: 'Director', status: 'LEAD' },
    { title: 'Producer', status: 'LEAD' },
    { title: 'Technical Director', status: 'SENIOR' },
    { title: 'Graphics Operator', status: 'OPERATOR' },
    { title: 'Camera Operator', status: 'OPERATOR' },
    { title: 'Audio Engineer', status: 'ENGINEER' }
];

const CrewCard = ({ title, status }) => {
    return (
        <div className="flex flex-col items-center p-6 border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card/70 transition-all duration-300 group hover-lift">
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-card" />
            </div>

            {/* Role title */}
            <h3 className="font-display text-lg font-bold text-foreground tracking-wider mb-1 text-center group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>

            {/* Status badge */}
            <span className="font-mono-tech text-xs text-primary/80 tracking-wider px-2 py-1 bg-primary/10 border border-primary/20">
                {status}
            </span>

            {/* Online indicator */}
            <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono-tech text-xs text-muted-foreground">ONLINE</span>
            </div>
        </div>
    );
};

const ExecutivesPage = () => {
    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/EXECUTIVES.mp4" 
                fallbackText="EXECUTIVES.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/85" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-28 pb-36 px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                            EXECUTIVES
                        </h1>
                        <p className="font-mono-tech text-lg text-primary text-glow-cyan tracking-widest">
                            CREW MANAGEMENT
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
                            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <section className="max-w-5xl mx-auto">
                        <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8 text-center">
                            Production Team Hierarchy
                        </h2>

                        {/* 3x2 Grid of crew roles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {CREW_ROLES.map((role, index) => (
                                <div 
                                    key={role.title}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                                >
                                    <CrewCard {...role} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom status */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="font-mono-tech text-sm text-muted-foreground">6 CREW MEMBERS ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="font-mono-tech text-sm text-muted-foreground">TEAM SYNCHRONIZED</span>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* Floating Home Button */}
            <FloatingHomeButton />
        </Layout>
    );
};

export default ExecutivesPage;
