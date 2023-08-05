// tailwind.config.js
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--q-primary)',
      secondary: 'var(--q-secondary)',
      accent: 'var(--q-accent)',
      blue: colors.blue,
      gray: colors.gray,
      red: colors.rose,
      green: colors.green,
      yellow: colors.yellow,
      white: '#fff',
      black: '#000',
      transparent: 'transparent'
    }

  },
  plugins: []
}
