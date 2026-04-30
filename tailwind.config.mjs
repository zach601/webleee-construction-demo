/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        steel: '#121212',
        coal: '#1d1c1a',
        graphite: '#2f2d29',
        sand: '#d8c3a5',
        bone: '#f7f2ea',
        ember: '#f97316',
        rust: '#c94714'
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Inter', 'Arial', 'Helvetica', 'sans-serif']
      },
      boxShadow: {
        hard: '12px 12px 0 rgba(249, 115, 22, 0.22)'
      }
    }
  },
  plugins: []
};
