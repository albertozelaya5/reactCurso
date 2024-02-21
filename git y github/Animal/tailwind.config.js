/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily:{
      'Robo': ['Roboto'],//asi se cambia la fuente
    },
    extend: {

    },
  },
  variants: {
    borderWidth: ['responsive','hover','focus']//QUE EL border width se usara con el hover
  },
  plugins: [],
}

