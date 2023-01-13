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
    backgroundImage: {
      '1': "url('./img/img1.jpg')",
      '2': "url('./img/img2.jpg')",
      '3': "url('./img/img3.jpg')",
     },
  },
  },
  plugins: [],
}
