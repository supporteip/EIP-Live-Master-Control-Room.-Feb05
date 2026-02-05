import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const PageTransition = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={cn(
                "transition-opacity duration-500 ease-in-out",
                isVisible ? "opacity-100" : "opacity-0",
                className
            )}
        >
            {children}
        </div>
    );
};

export default PageTransition;
