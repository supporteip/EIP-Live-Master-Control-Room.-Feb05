import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';
import { FloatingHomeButton } from '@/components/shared/FloatingHomeButton';

const TimelineColumn = ({ title, image, subtitle, isLive, children }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={`flex flex-col items-center p-6 border-2 ${isLive ? 'border-destructive' : 'border-primary/30'} bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary group`}
            style={isLive ? { 
                boxShadow: '0 0 30px rgba(255, 0, 0, 0.3)',
                animation: 'pulse 2s ease-in-out infinite'
            } : {}}
        >
            {/* Title */}
            <h3 className={`font-display text-2xl font-bold tracking-wider mb-4 ${isLive ? 'text-destructive' : 'text-primary text-glow-cyan'}`}>
                {title}
            </h3>

            {/* Content area */}
            <div className="w-full aspect-video mb-4 overflow-hidden bg-muted border border-primary/20 group-hover:scale-[1.02] transition-transform duration-300">
                {children ? (
                    children
                ) : image && !imageError ? (
                    <img 
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center signal-lost-pattern">
                        <span className="font-mono-tech text-primary text-sm">IMAGE PENDING</span>
                    </div>
                )}
            </div>

            {/* Subtitle */}
            <p className="font-mono-tech text-sm text-muted-foreground tracking-wider text-center">
                {subtitle}
            </p>
        </div>
    );
};

const ExecutionPage = () => {
    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/EXECUTION.mp4" 
                fallbackText="EXECUTION.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/85" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-28 pb-36 px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                            EXECUTION
                        </h1>
                        <p className="font-mono-tech text-lg text-primary text-glow-cyan tracking-widest">
                            PROJECT TIMELINE
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
                            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                        </div>
                    </div>

                    {/* 3-Column Timeline Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* PAST Column */}
                        <TimelineColumn
                            title="PAST"
                            image="/images/EXECUTION_PAST.png"
                            subtitle="Completed Productions"
                        />

                        {/* LIVE Column - Highlighted */}
                        <TimelineColumn
                            title="LIVE"
                            subtitle=""
                            isLive={true}
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center bg-card relative">
                                {/* Recording indicator */}
                                <div className="absolute top-3 right-3 flex items-center gap-2 bg-destructive/90 px-2 py-1">
                                    <div className="w-3 h-3 rounded-full bg-foreground animate-recording" />
                                    <span className="font-mono-tech text-xs text-foreground font-bold tracking-wider">
                                        REC
                                    </span>
                                </div>

                                {/* Large text */}
                                <h4 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wider text-center mb-2">
                                    IN PRODUCTION
                                </h4>

                                {/* Status text - animated */}
                                <p className="font-mono-tech text-sm text-destructive animate-pulse tracking-wider mb-4">
                                    MCR ACTIVE | 4 FEEDS ONLINE
                                </p>

                                {/* Status grid */}
                                <div className="grid grid-cols-2 gap-2">
                                    {[1, 2, 3, 4].map((feed) => (
                                        <div key={feed} className="flex items-center gap-2 px-2 py-1 bg-muted/50 border border-primary/20">
                                            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                            <span className="font-mono-tech text-xs text-muted-foreground">
                                                FEED {feed}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TimelineColumn>

                        {/* UPCOMING Column */}
                        <TimelineColumn
                            title="UPCOMING"
                            image="/images/EXECUTION_UPCOMING.png"
                            subtitle="Scheduled Events"
                        />
                    </div>

                    {/* Bottom status bar */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                            <span className="font-mono-tech text-sm text-muted-foreground">PAST: 12 EVENTS</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-destructive animate-recording" />
                            <span className="font-mono-tech text-sm text-destructive">LIVE: 1 EVENT</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="font-mono-tech text-sm text-primary">UPCOMING: 8 EVENTS</span>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* Floating Home Button */}
            <FloatingHomeButton />
        </Layout>
    );
};

export default ExecutionPage;
