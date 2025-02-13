/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#759596',
            secondary: '#757575',
            accent: '#151515',
            neutral: '#E7F6F2',
            primarybg: '#111111',
            secondarybg: '#222222',
        },
    },
  },
  plugins: [],
}

