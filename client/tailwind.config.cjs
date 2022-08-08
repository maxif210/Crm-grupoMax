/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-white': '#FAFFFD',
        'card-blue': '#e0e9f1',
        'dark-blue': '#87b2c3',
        'light-blue': '#bed5e2',
        'hover-blue': '#478aa4',
      },
    },
  },
  plugins: [],
}
