// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ],
    // ...
    theme: {
      screens :{
        'wordle':'500px',
        ...defaultTheme.screens,
      },
      extend: {
        colors: {
          'accent-1': '#FAFAFA',
          'accent-2': '#EAEAEA',
        },
      },
    },
  }