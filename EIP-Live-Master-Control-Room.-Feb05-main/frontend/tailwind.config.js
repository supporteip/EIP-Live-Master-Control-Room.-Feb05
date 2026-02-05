/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Orbitron', 'sans-serif'],
                'mono-tech': ['Share Tech Mono', 'monospace'],
                'body': ['Rajdhani', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                /* Custom colors for HUD */
                cyan: {
                    neon: '#00E5FF',
                    glow: '#00E5FF',
                },
                orange: {
                    safety: '#FF6D00',
                },
            },
            boxShadow: {
                'cyan': '0 0 20px rgba(0, 229, 255, 0.5)',
                'cyan-intense': '0 0 40px rgba(0, 229, 255, 0.8)',
                'orange': '0 0 20px rgba(255, 109, 0, 0.5)',
                'red': '0 0 30px rgba(255, 0, 0, 0.6)',
                'green': '0 0 30px rgba(0, 255, 0, 0.6)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'pulse-expand': {
                    '0%': { transform: 'scale(0.8)', opacity: '1' },
                    '100%': { transform: 'scale(1.5)', opacity: '0' }
                },
                'pulse-ring': {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '1' }
                },
                'scan-line': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                'rotate-slow': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' }
                },
                'crosshair-pulse': {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'overlay-flash': {
                    '0%': { opacity: '0' },
                    '20%': { opacity: '1' },
                    '80%': { opacity: '1' },
                    '100%': { opacity: '0' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'pulse-expand': 'pulse-expand 2s ease-out infinite',
                'pulse-ring': 'pulse-ring 1.5s ease-in-out infinite',
                'scan-line': 'scan-line 2s linear infinite',
                'rotate-slow': 'rotate-slow 10s linear infinite',
                'crosshair-pulse': 'crosshair-pulse 1s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-in-out forwards',
                'slide-up': 'slide-up 0.6s ease-out forwards',
                'overlay-flash': 'overlay-flash 2s ease-in-out forwards'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
