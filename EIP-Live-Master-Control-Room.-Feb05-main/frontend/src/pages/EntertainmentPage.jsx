import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';
import { FloatingHomeButton } from '@/components/shared/FloatingHomeButton';
import { Film, Play, Video, Share2 } from 'lucide-react';

const CONTENT_TYPES = [
    {
        icon: Play,
        title: 'Live Events',
        description: 'Real-time broadcast coverage of sporting events and competitions'
    },
    {
        icon: Film,
        title: 'Highlight Reels',
        description: 'Curated best moments and key plays from events'
    },
    {
        icon: Video,
        title: 'Documentary Production',
        description: 'In-depth storytelling and behind-the-scenes content'
    },
    {
        icon: Share2,
        title: 'Social Media Content',
        description: 'Platform-optimized clips and engagement content'
    }
];

const ContentCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="p-6 border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card/70 transition-all duration-300 group cursor-pointer hover-lift">
            {/* Icon */}
            <div className="w-16 h-16 mb-4 border-2 border-primary/50 bg-primary/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                <Icon className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-bold text-foreground tracking-wider mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {description}
            </p>

            {/* Hover indicator */}
            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono-tech text-xs text-primary">EXPLORE</span>
            </div>
        </div>
    );
};

const EntertainmentPage = () => {
    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/ENTERTAINMENT.mp4" 
                fallbackText="ENTERTAINMENT.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/85" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-28 pb-36 px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                            ENTERTAINMENT
                        </h1>
                        <p className="font-mono-tech text-lg text-primary text-glow-cyan tracking-widest">
                            CONTENT PRODUCTION
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
                            Multi-Format Content Creation
                        </h2>

                        {/* Grid of content type cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CONTENT_TYPES.map((content, index) => (
                                <div 
                                    key={content.title}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                                >
                                    <ContentCard {...content} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bottom status */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="font-mono-tech text-sm text-muted-foreground">4 CONTENT PIPELINES ACTIVE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="font-mono-tech text-sm text-muted-foreground">PRODUCTION READY</span>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* Floating Home Button */}
            <FloatingHomeButton />
        </Layout>
    );
};

export default EntertainmentPage;
