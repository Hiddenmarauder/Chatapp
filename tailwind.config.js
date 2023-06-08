/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [" ./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  }
}

