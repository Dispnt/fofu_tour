/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html','./*.js']
  },
  theme: {
    fontFamily: {
    'eventname': ['Itim', 'sans-serif'],
    },
    extend: {
      height:{
      '100':'30rem',
    },
  },
  },
  plugins: [],
}
