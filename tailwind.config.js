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
      },
      fontFamily: {
        sans: 'Vazir',

      },
      colors:{
        green :"#dee679",
        blue:"#47d3e4",
        pezeshki:"#22a79a",
        yellow:"#fbd83a",
        pink:"#d290dc"
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = config