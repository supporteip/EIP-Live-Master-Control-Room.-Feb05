import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FloatingHomeButton = ({ className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/stage5');
    };

    return (
        <div className={cn(
            "fixed bottom-20 right-6 z-[9999] animate-fade-in",
            className
        )}>
            <button
                onClick={handleClick}
                className="group relative w-[60px] h-[60px] rounded-full border-2 border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-cyan-intense hover:scale-110 cursor-pointer"
                aria-label="Return to Multiviewer"
            >
                <Home className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                
                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping opacity-20" />
            </button>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                <div className="bg-card border border-primary/50 px-3 py-1.5 text-sm font-mono-tech text-primary">
                    Return to Multiviewer
                </div>
            </div>
        </div>
    );
};

export default FloatingHomeButton;
