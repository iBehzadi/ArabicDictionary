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
      colors: {

        pezeshki: "#22a79a",
        yellow: "#fbd83a",

        pink: "#d290dc"

      },
      fontSize: {
        "2xs": '10px'
      }
    },
    screens: {
      '2sm': '440px',
      // => @media (min-width: 440px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['odd']
    },
  },
  plugins: [],
}

module.exports = config