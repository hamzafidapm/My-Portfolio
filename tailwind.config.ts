import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070a',
          900: '#0b0b0f',
          850: '#101016',
          800: '#15151d',
          700: '#1e1e28',
          600: '#2a2a36',
        },
        gold: {
          50: '#fffaeb',
          100: '#fdf0c8',
          200: '#fbe08c',
          300: '#f8ca50',
          400: '#f5b429',
          500: '#e89a10',
          600: '#c9750b',
          700: '#a0530d',
          800: '#834112',
          900: '#6f3612',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245,180,41,0.25), 0 12px 40px -12px rgba(245,180,41,0.35)',
        'glow-lg': '0 0 0 1px rgba(245,180,41,0.35), 0 24px 70px -20px rgba(245,180,41,0.45)',
      },
      keyframes: {
        'gradient-drift': {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-6%,0) scale(1.12)' },
        },
        'ring-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'gradient-drift': 'gradient-drift 18s ease-in-out infinite',
        'ring-spin': 'ring-spin 8s linear infinite',
        marquee: 'marquee 32s linear infinite',
        blink: 'blink 1.05s step-end infinite',
      },
    },
  },
  plugins: [],
};

export default config;
