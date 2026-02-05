import React from 'react';
import { X } from 'lucide-react';

export const EnrollmentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop with blur */}
            <div 
                className="absolute inset-0 bg-background/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />
            
            {/* Modal content */}
            <div className="relative z-10 w-full max-w-md mx-4 animate-slide-up">
                <div className="bg-card border-2 border-primary p-8 glow-cyan">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Content */}
                    <div className="text-center space-y-6">
                        {/* Icon */}
                        <div className="w-16 h-16 mx-auto border-2 border-secondary rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-secondary rounded-full animate-pulse" />
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-2xl font-bold text-foreground tracking-wider">
                            ENROLLMENT SYSTEM
                        </h2>
                        
                        <p className="font-display text-xl text-secondary text-glow-orange">
                            COMING SOON
                        </p>

                        {/* Contact info */}
                        <div className="pt-4 border-t border-primary/30">
                            <p className="font-mono-tech text-sm text-muted-foreground mb-2">
                                For inquiries, contact:
                            </p>
                            <p className="font-mono-tech text-primary text-glow-cyan">
                                admissions@eip-sporting.com
                            </p>
                            <p className="font-mono-tech text-primary text-glow-cyan mt-1">
                                +91 XXXX XXXXXX
                            </p>
                        </div>

                        {/* Status indicator */}
                        <div className="flex items-center justify-center gap-2 pt-4">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="font-mono-tech text-xs text-muted-foreground">
                                SYSTEM IN DEVELOPMENT
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrollmentModal;
