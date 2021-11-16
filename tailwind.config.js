/** @type {import("tailwindcss/tailwind-config").TailwindConfig} */
const config = {
  mode: 'jit',
  purge: [
    './src/**/*.{ts,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '4xl': '65px',
        '3xl2': '36px'
      },
      fontFamily: {
        sans: 'Vazir',

      },
      colors:{
        
        pezeshki:"#22a79a",
        yellow:"#fbd83a",
        YelloRgb:"#efa00b",
        pink:"#d290dc",
        gray_color:"#d5d5d5",
        blue_to_gray:"#433d57"
        
      },
      
      fontSize:{
        "2xs":'10px'
      },
      boxShadow:{
        shadowBottom:"1px 3px 3px #b0b5b0;",
        shadow__lx:'10px 5px 15px 2px #888888',
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor:['odd']
    },
  },
  plugins: [],
}

module.exports = config