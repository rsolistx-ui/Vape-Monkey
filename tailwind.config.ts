import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#060708',
          panel: '#0f1216',
          panelSoft: '#141920',
          stroke: '#2a323d',
          accent: '#9ec7ff',
          accentDeep: '#547da8',
          text: '#edf1f5',
          muted: '#9ca8b8'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(158,199,255,.2), 0 20px 40px rgba(6,8,10,.45)',
      },
      backgroundImage: {
        haze: 'radial-gradient(circle at top right, rgba(158,199,255,.16), transparent 45%), radial-gradient(circle at bottom left, rgba(122,138,163,.12), transparent 50%)',
      }
    },
  },
  plugins: [],
} satisfies Config;
