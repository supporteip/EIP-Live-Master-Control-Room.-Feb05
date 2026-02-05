import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { PageTransition } from '@/components/shared/PageTransition';

const Stage2Approach = () => {
    const navigate = useNavigate();

    // Auto-advance after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/stage3');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Layout>
            {/* Video Background - continues from Stage 1 */}
            <VideoBackground 
                src="/videos/1.mp4" 
                fallbackText="1.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/50" />

            {/* Content */}
            <PageTransition>
                <div className="fixed inset-0 z-20 flex flex-col items-center justify-center">
                    <div className="text-center space-y-6 animate-fade-in">
                        {/* Cinematic text overlay */}
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-widest">
                            APPROACHING
                        </h1>
                        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary text-glow-cyan tracking-widest">
                            STADIUM
                        </h2>

                        {/* Loading indicator */}
                        <div className="pt-12 flex flex-col items-center gap-4">
                            <div className="w-48 h-1 bg-muted overflow-hidden rounded-full">
                                <div 
                                    className="h-full bg-primary transition-all duration-[3000ms] ease-linear"
                                    style={{ width: '100%', animation: 'grow 3s linear forwards' }}
                                />
                            </div>
                            <span className="font-mono-tech text-sm text-muted-foreground tracking-widest">
                                INITIALIZING BROADCAST COMPOUND...
                            </span>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* CSS for progress bar animation */}
            <style>{`
                @keyframes grow {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </Layout>
    );
};

export default Stage2Approach;
