import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';
import { FloatingHomeButton } from '@/components/shared/FloatingHomeButton';
import { EnrollmentModal } from '@/components/shared/EnrollmentModal';

const PEETHAS = [
    {
        number: '01',
        image: '/images/Rig Peetha_Website 9-16 Flyer.png',
        title: 'RIG PEETHA',
        subtitle: 'Digital Onboarding',
        description: 'Foundation training in broadcast terminology and digital workflow'
    },
    {
        number: '02',
        image: '/images/Yajur Peetha_Website 9*16 Flyer.png',
        title: 'YAJUR PEETHA',
        subtitle: 'Simulator Training',
        description: 'Hands-on virtual MCR simulation and equipment training'
    },
    {
        number: '03',
        image: '/images/Saama Peetha_Website 9*16 Flyer.png',
        title: 'SAAMA PEETHA',
        subtitle: 'Live Link-up',
        description: 'Real-time production connection and live event participation'
    },
    {
        number: '04',
        image: '/images/Atharva Peetha_Website 9*16 Flyer.png',
        title: 'ATHARVA PEETHA',
        subtitle: 'On-Field Deployment',
        description: 'Professional stadium deployment and certification'
    }
];

const VEDANGAS = [
    { image: '/images/1.CHHANDAS_v1_Website.png', label: 'CHHANDAS' },
    { image: '/images/2.KALPA_v1_Website.png', label: 'KALPA' },
    { image: '/images/3.JYOTISHA_v1_Website.png', label: 'JYOTISHA' },
    { image: '/images/4.NIRUKTA_v1_Website.png', label: 'NIRUKTA' },
    { image: '/images/5.SHIKSHA_v1_Website.png', label: 'SHIKSHA' },
    { image: '/images/6.VYAKARANA_v1_Website.png', label: 'VYAKARANA' }
];

const PeethaCard = ({ number, image, title, subtitle, description }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="flex-shrink-0 w-[300px] bg-card border-2 border-primary/30 hover:border-primary hover:shadow-cyan transition-all duration-300 overflow-hidden group">
            {/* Card number badge */}
            <div className="absolute top-3 left-3 z-10 bg-background/80 px-2 py-1 border border-primary/50">
                <span className="font-mono-tech text-xs text-primary">{number}</span>
            </div>

            {/* Image container */}
            <div className="relative h-[350px] overflow-hidden bg-muted">
                {!imageError ? (
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
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2 relative">
                <h3 className="font-display text-xl font-bold text-primary text-glow-cyan tracking-wider">
                    {title}
                </h3>
                <p className="font-mono-tech text-sm text-secondary">
                    {subtitle}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

const VedangaTile = ({ image, label }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] border-2 border-primary/30 hover:border-primary bg-card overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-cyan">
                {!imageError ? (
                    <img 
                        src={image}
                        alt={label}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center signal-lost-pattern">
                        <span className="font-mono-tech text-primary text-xs">PENDING</span>
                    </div>
                )}
            </div>
            <span className="font-mono-tech text-sm text-primary text-glow-cyan tracking-wider group-hover:text-foreground transition-colors">
                {label}
            </span>
        </div>
    );
};

const EducationPage = () => {
    const [showEnrollModal, setShowEnrollModal] = useState(false);

    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/EDUCATION.mp4" 
                fallbackText="EDUCATION.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/80" />

            {/* Content */}
            <PageTransition>
                <div className="relative z-20 min-h-screen pt-28 pb-36 px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-12 animate-slide-up">
                        <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wider mb-4">
                            EDUCATION DEPLOYMENT
                        </h1>
                        <p className="font-display text-xl md:text-2xl text-primary text-glow-cyan tracking-wider mb-2">
                            SPaaS CURRICULUM
                        </p>
                        <p className="font-mono-tech text-sm md:text-base text-muted-foreground tracking-widest">
                            Sports Production as a Service | Phygital Training Model
                        </p>

                        {/* Decorative line */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-primary" />
                            <div className="w-3 h-3 rotate-45 border-2 border-primary" />
                            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-primary" />
                        </div>
                    </div>

                    {/* Section 1: The 4 Peethas */}
                    <section className="mb-20">
                        <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-6 text-center">
                            THE 4 PEETHAS
                        </h2>
                        <p className="font-mono-tech text-sm text-secondary text-center mb-8 tracking-wider">
                            DEPLOYMENT PHASES
                        </p>

                        {/* Horizontal scrollable cards */}
                        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin">
                            <div className="flex gap-8 min-w-max justify-center">
                                {PEETHAS.map((peetha, index) => (
                                    <div 
                                        key={peetha.title}
                                        className="animate-fade-in relative"
                                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                                    >
                                        <PeethaCard {...peetha} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Vedanga Framework */}
                    <section className="mb-20">
                        <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-2 text-center">
                            VEDANGA FRAMEWORK
                        </h2>
                        <p className="font-mono-tech text-sm text-secondary text-center mb-10 tracking-wider">
                            6 EDUCATIONAL PILLARS
                        </p>

                        {/* 3x2 Grid of Vedanga tiles */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto justify-items-center">
                            {VEDANGAS.map((vedanga, index) => (
                                <div 
                                    key={vedanga.label}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                                >
                                    <VedangaTile {...vedanga} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </PageTransition>

            {/* Sticky Enlist Button */}
            <div className="fixed bottom-32 left-0 right-0 z-30 px-4">
                <div className="max-w-2xl mx-auto">
                    <button
                        onClick={() => setShowEnrollModal(true)}
                        className="w-full h-[60px] bg-secondary hover:bg-secondary/90 text-secondary-foreground font-display text-xl font-bold tracking-widest transition-all duration-300 animate-pulse-glow hover:scale-[1.02] cursor-pointer"
                    >
                        ENLIST IN COHORT
                    </button>
                </div>
            </div>

            {/* Floating Home Button */}
            <FloatingHomeButton />

            {/* Enrollment Modal */}
            <EnrollmentModal 
                isOpen={showEnrollModal} 
                onClose={() => setShowEnrollModal(false)} 
            />
        </Layout>
    );
};

export default EducationPage;
