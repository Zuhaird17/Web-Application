// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure these file types are included
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        spinAndShine: 'spin 1s linear infinite, shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        shine: {
          '0%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)' },
          '100%': { boxShadow: '0 0 10px rgba(255, 255, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
