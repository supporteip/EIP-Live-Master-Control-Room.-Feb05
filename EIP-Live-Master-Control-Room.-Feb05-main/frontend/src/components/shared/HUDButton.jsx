import React from 'react';
import { cn } from '@/lib/utils';

export const HUDButton = ({ 
    children, 
    variant = 'cyan', 
    size = 'default',
    className,
    onClick,
    disabled,
    ...props 
}) => {
    const baseStyles = "relative font-display font-semibold uppercase tracking-wider transition-all duration-300 border-2 btn-hud";
    
    const variants = {
        cyan: "bg-primary/20 text-primary border-primary hover:bg-primary hover:text-primary-foreground glow-cyan hover:glow-cyan-intense",
        orange: "bg-secondary/20 text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground glow-orange",
        green: "bg-success/20 text-success border-success hover:bg-success hover:text-success-foreground glow-green",
        red: "bg-destructive/20 text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground glow-red",
        ghost: "bg-transparent text-foreground/70 border-foreground/30 hover:border-primary hover:text-primary"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        default: "px-8 py-3 text-base",
        lg: "px-12 py-4 text-lg"
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default HUDButton;
