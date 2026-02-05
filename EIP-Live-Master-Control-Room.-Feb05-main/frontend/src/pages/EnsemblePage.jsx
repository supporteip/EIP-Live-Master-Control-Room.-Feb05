import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';
import { FloatingHomeButton } from '@/components/shared/FloatingHomeButton';
import { ChevronRight } from 'lucide-react';

const WORKFLOW_PHASES = [
    {
        title: 'Pre-Production',
        items: ['Planning', 'Scheduling', 'Resource Allocation', 'Technical Setup']
    },
    {
        title: 'Live Production',
        items: ['Camera Control', 'Switching', 'Graphics', 'Audio Mixing']
    },
    {
        title: 'Post-Production',
        items: ['Editing', 'Highlights', 'Archive', 'Distribution']
    }
];

const WorkflowPhase = ({ title, items, isLast }) => {
    return (
        <div className="flex items-center">
            <div className="flex-1 p-6 border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card/70 transition-all duration-300 hover-lift">
                {/* Phase title */}
                <h3 className="font-display text-xl font-bold text-primary text-glow-cyan tracking-wider mb-4 text-center">
                    {title}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary/50" />
                            <span className="font-mono-tech text-sm text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Status indicator */}
                <div className="mt-4 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="font-mono-tech text-xs text-muted-foreground">ACTIVE</span>
                </div>
            </div>

            {/* Arrow connector */}
            {!isLast && (
                <div className="hidden md:flex items-center justify-center w-12">
                    <ChevronRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
            )}
        </div>
    );
};

const EnsemblePage = () => {
    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/ENSEMBLE.mp4" 
                fallbackText="ENSEMBLE.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/85" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-28 pb-36 px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                            ENSEMBLE
                        </h1>
                        <p className="font-mono-tech text-lg text-primary text-glow-cyan tracking-widest">
                            TEAM COORDINATION
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
                            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <section className="max-w-6xl mx-auto">
                        <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8 text-center">
                            Synchronized Production Workflow
                        </h2>

                        {/* Workflow diagram */}
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
                            {WORKFLOW_PHASES.map((phase, index) => (
                                <WorkflowPhase 
                                    key={phase.title}
                                    {...phase}
                                    isLast={index === WORKFLOW_PHASES.length - 1}
                                />
                            ))}
                        </div>

                        {/* Workflow status bar */}
                        <div className="mt-12 p-4 border-2 border-primary/30 bg-card/30">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono-tech text-sm text-muted-foreground">WORKFLOW PROGRESS</span>
                                <span className="font-mono-tech text-sm text-primary">67%</span>
                            </div>
                            <div className="w-full h-2 bg-muted overflow-hidden">
                                <div className="h-full w-2/3 bg-primary glow-cyan" />
                            </div>
                        </div>
                    </section>

                    {/* Bottom status */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="font-mono-tech text-sm text-muted-foreground">3 PHASES SYNCHRONIZED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="font-mono-tech text-sm text-muted-foreground">WORKFLOW ACTIVE</span>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* Floating Home Button */}
            <FloatingHomeButton />
        </Layout>
    );
};

export default EnsemblePage;
