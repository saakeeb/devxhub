/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      filter: {
        'blur-06': 'url(#threshold) blur(0.6px)',
      },
      fontFamily: {
        "f-raleway": ['Raleway', 'sans-serif'],
      },
    },
    screens: {
      "sm": '320px',
      "md": '768px',
      "lg": '1180px',
      "xl": '1280px',
      "2xl": '1536px'
    }
  },
  plugins: [],
};