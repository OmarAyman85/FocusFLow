/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-', // Adds "tw-" prefix to all Tailwind classes to avoid conflicts
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all React components and files in `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
