module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // for React components in src folder
    './client/index.html', // for any HTML file
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Chonburi'],
        secondary: ['Abhaya Libre']
      }
    },
  },
  plugins: [],
}
