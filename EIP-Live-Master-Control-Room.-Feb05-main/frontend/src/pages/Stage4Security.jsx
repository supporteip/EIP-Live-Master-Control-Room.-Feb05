import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { VideoBackground } from '@/components/shared/VideoBackground';
import { HUDButton } from '@/components/shared/HUDButton';
import { PageTransition } from '@/components/shared/PageTransition';
import { FaceRecognitionReticle } from '@/components/shared/FaceRecognitionReticle';
import { AccessOverlay } from '@/components/shared/AccessOverlay';

const Stage4Security = () => {
    const navigate = useNavigate();
    const [overlay, setOverlay] = useState(null); // 'granted' | 'denied' | null

    const handleAuthenticate = () => {
        setOverlay('granted');
        setTimeout(() => {
            navigate('/stage5');
        }, 2000);
    };

    const handleDeny = () => {
        setOverlay('denied');
    };

    const handleBack = () => {
        navigate('/stage3');
    };

    const handleReport = () => {
        setOverlay(null);
    };

    return (
        <Layout>
            {/* Video Background */}
            <VideoBackground 
                src="/videos/3.mp4" 
                fallbackText="3.mp4 MISSING" 
            />

            {/* Dark overlay */}
            <div className="fixed inset-0 z-10 bg-background/70" />

            {/* Content */}
            <PageTransition>
                <div className="fixed inset-0 z-20 flex flex-col items-center justify-center px-4 overflow-y-auto py-24">
                    <div className="text-center space-y-4 animate-slide-up">
                        {/* Title */}
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-destructive tracking-wider">
                            RESTRICTED ACCESS
                        </h1>

                        {/* Subtitle */}
                        <p className="font-mono-tech text-lg md:text-xl text-foreground tracking-widest">
                            ENTRY TO AUTHORISED PERSONNEL ONLY
                        </p>

                        {/* Warning indicators */}
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                                <span className="font-mono-tech text-sm text-destructive">SECURITY CHECKPOINT</span>
                            </div>
                        </div>

                        {/* Face Recognition Tile */}
                        <div className="flex justify-center py-8">
                            <FaceRecognitionReticle />
                        </div>

                        {/* Authentication buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <HUDButton 
                                variant="green" 
                                size="lg"
                                onClick={handleAuthenticate}
                            >
                                AUTHENTICATE
                            </HUDButton>
                            <HUDButton 
                                variant="red" 
                                size="lg"
                                onClick={handleDeny}
                            >
                                ACCESS DENIED
                            </HUDButton>
                        </div>

                        {/* Back button */}
                        <div className="pt-4">
                            <HUDButton 
                                variant="ghost" 
                                size="default"
                                onClick={handleBack}
                            >
                                ← BACK TO COMPOUND
                            </HUDButton>
                        </div>
                    </div>
                </div>
            </PageTransition>

            {/* Access Overlay */}
            {overlay && (
                <AccessOverlay 
                    type={overlay}
                    showReportButton={overlay === 'denied'}
                    onReport={handleReport}
                />
            )}
        </Layout>
    );
};

export default Stage4Security;
