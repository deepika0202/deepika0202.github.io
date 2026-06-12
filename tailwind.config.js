/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'system-ui, -apple-system, sans-serif',
      },
    },
  },
  plugins: [],
}
