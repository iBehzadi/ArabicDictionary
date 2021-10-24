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

        pink:"#d290dc"
        
      },
      fontSize:{
        "2xs":'10px'
      }
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