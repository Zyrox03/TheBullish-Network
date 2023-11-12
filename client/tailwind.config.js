/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'primary': '#FF5733', 
        'secondary': '#3486F8', 
        'main_bg': '#0D0D0D', 
        'secondary_bg': '#121212', 
        'question_bg': '#1a1a1a', 
        'matrix': '#37ff00', 
      },
    },
  },
  plugins: [],
}

