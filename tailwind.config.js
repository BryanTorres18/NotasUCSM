/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{},
    colors: {
      'fondo': '#CDF5FD',
      'rectangulo': '#00A9FF',
      'negro': '#000000',
      'blanco': '#FFFFFF',
      'bloques': '#89CFF3',
      'rojo': '#FF0000',
      'verde': '#008000'
    },
  },
  plugins: [],
}