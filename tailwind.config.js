/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E6F40',    // forest green
        secondary: '#6BCBEB',  // sky blue
        accent: '#E9C46A',     // warm beige
        dark: '#1B1B1B',       // dark
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
} 