/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode:'class',
  theme: {
    container:{
      center:true,
      pandding :'16px',
    },
    extend: {
      colors:{
        grey:'#10b981',
        dark:'#0f172a',
        dos:'#64748b',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
