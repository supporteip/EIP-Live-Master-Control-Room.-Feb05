import React, { useState } from 'react';

const PARTNER_LOGOS = [
    { src: '/images/startup_india.jpg', alt: 'Startup India' },
    { src: '/images/startup-karnataka.png', alt: 'Startup Karnataka' },
    { src: '/images/make-in-india.png', alt: 'Make in India' },
    { src: '/images/msme_PNG.png', alt: 'MSME' },
    { src: '/images/nsdc.png', alt: 'NSDC' },
    { src: '/images/BCPL.png', alt: 'BCPL' },
    { src: '/images/iec.jpg', alt: 'IEC' },
];

const PartnerLogo = ({ src, alt }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError) return null;

    return (
        <div className="flex-shrink-0 group cursor-pointer">
            <img
                src={src}
                alt={alt}
                className="h-[50px] md:h-[70px] w-auto object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                onError={() => setHasError(true)}
            />
        </div>
    );
};

export const Footer = () => {
    return (
        <footer className="relative z-10 bg-background/90 backdrop-blur-sm border-t border-primary/30 mt-auto">
            {/* Partner logos row */}
            <div className="py-3 border-b border-primary/20">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 px-4">
                    {PARTNER_LOGOS.map((logo) => (
                        <PartnerLogo key={logo.alt} {...logo} />
                    ))}
                </div>
            </div>
            
            {/* Copyright */}
            <div className="py-2">
                <p className="text-center font-mono-tech text-sm text-foreground tracking-wider">
                    2026 All Rights Reserved | EIP Sporting Solutions India
                </p>
            </div>
        </footer>
    );
};

export default Footer;
