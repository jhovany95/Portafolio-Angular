/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-blanco': "url('/assets/cool-background.png')",
        'fondo-negro': "url('/assets/black-background.png')",
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

