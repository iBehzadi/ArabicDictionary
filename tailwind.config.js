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
        '4xl': '80px',
      },
      fontFamily: {
        quran: 'MeQuran',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = config