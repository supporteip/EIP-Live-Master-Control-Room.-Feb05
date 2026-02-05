import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScanlineOverlay } from '@/components/shared/ScanlineOverlay';

export const Layout = ({ children, showHeader = true, showFooter = true, showScanlines = true }) => {
    return (
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            {showScanlines && <ScanlineOverlay />}
            {showHeader && <Header />}
            <main className="flex-1 pt-20 pb-32 overflow-y-auto">
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout;
