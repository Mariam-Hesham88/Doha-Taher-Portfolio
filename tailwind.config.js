/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    'node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#92462c",
        secondary: "#9D8F74",
        background: "#F6EEE1",
        smothText: "#5b5b5b",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

