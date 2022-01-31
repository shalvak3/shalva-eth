// tailwind.config.js
module.exports = {
    purge: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js'
    ],
    // ...
    theme: {
      extend: {
        colors: {
          'accent-1': '#FAFAFA',
          'accent-2': '#EAEAEA',
        },
      },
    },
  }