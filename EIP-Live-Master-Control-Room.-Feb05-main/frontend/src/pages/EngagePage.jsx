import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';
import { FloatingHomeButton } from '@/components/shared/FloatingHomeButton';
import { Users, Building2, GraduationCap, Briefcase } from 'lucide-react';

const ENGAGEMENT_CARDS = [
    {
        icon: Users,
        title: 'Student Community',
        description: 'Connect with aspiring broadcast professionals and fellow trainees in our growing community'
    },
    {
        icon: Building2,
        title: 'Industry Partners',
        description: 'Collaborate with leading broadcasters, sports organizations, and technology providers'
    },
    {
        icon: GraduationCap,
        title: 'Alumni Network',
        description: 'Access our global network of certified professionals working in sports production'
    },
    {
        icon: Briefcase,
        title: 'Career Placement',
        description: 'Explore job opportunities and internships with our partner organizations'
    }
];

const EngagementCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="p-6 border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card/70 transition-all duration-300 group cursor-pointer h-full flex flex-col hover-lift">
            {/* Icon */}
            <div className="w-16 h-16 mb-4 border-2 border-primary/50 bg-primary/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                <Icon className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-bold text-foreground tracking-wider mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>

            {/* Description */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                {description}
            </p>

            {/* Connect indicator */}
            <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono-tech text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    CONNECT
                </span>
            </div>
        </div>
    );
};

const EngagePage = () => {
    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/ENGAGE.mp4" 
                fallbackText="ENGAGE.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/85" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-28 pb-36 px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                            ENGAGE
                        </h1>
                        <p className="font-mono-tech text-lg text-primary text-glow-cyan tracking-widest">
                            COMMUNITY & OUTREACH
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
                            Connect With The Ecosystem
                        </h2>

                        {/* 2x2 Grid of engagement cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ENGAGEMENT_CARDS.map((card, index) => (
                                <div 
                                    key={card.title}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                                >
                                    <EngagementCard {...card} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Community stats */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold text-primary text-glow-cyan">500+</div>
                            <div className="font-mono-tech text-xs text-muted-foreground">STUDENTS</div>
                        </div>
                        <div className="w-px h-8 bg-primary/30" />
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold text-primary text-glow-cyan">25+</div>
                            <div className="font-mono-tech text-xs text-muted-foreground">PARTNERS</div>
                        </div>
                        <div className="w-px h-8 bg-primary/30" />
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold text-primary text-glow-cyan">150+</div>
                            <div className="font-mono-tech text-xs text-muted-foreground">ALUMNI</div>
                        </div>
                        <div className="w-px h-8 bg-primary/30" />
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold text-primary text-glow-cyan">50+</div>
                            <div className="font-mono-tech text-xs text-muted-foreground">PLACEMENTS</div>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* Floating Home Button */}
            <FloatingHomeButton />
        </Layout>
    );
};

export default EngagePage;
