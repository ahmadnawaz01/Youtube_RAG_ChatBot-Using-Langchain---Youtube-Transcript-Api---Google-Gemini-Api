/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'float-delayed': 'floatDelayed 8s ease-in-out infinite',
        'pulse-slow': 'pulseGlow 10s ease-in-out infinite',
        'glow-cyan': 'glowCyan 3s infinite alternate',
        'glow-purple': 'glowPurple 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.15, transform: 'scale(1)' },
          '50%': { opacity: 0.35, transform: 'scale(1.05)' },
        },
        glowCyan: {
          '0%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.15), 0 0 20px rgba(6, 182, 212, 0.05)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.15)' },
        },
        glowPurple: {
          '0%': { boxShadow: '0 0 10px rgba(168, 85, 247, 0.15), 0 0 20px rgba(168, 85, 247, 0.05)' },
          '100%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.15)' },
        },
      },
    },
  },
  plugins: [],
}
