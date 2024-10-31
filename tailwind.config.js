/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {},
  plugins: [],
  /*
  Esta opción la podría poner para utilizar clases dinámicas en los componentes, lo utilicé para el botón de BackToList pero al utilizar solo el red y green lo hice con un objeto en el propio componente.
  safelist: [
    {
      pattern: /bg-(green|red|gray|orange|blue|yellow)-500/,
    },
    {
      pattern: /hover:bg-(green|red|gray|orange|blue|yellow)-600/,
    },
    {
      pattern: /focus:ring-(green|red|gray|orange|blue|yellow)-400/,
    },
  ],
  */
}
