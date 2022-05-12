module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#EB5757',
        'secondary': '#FDEDED',
        'orange-light': 'rgba(235, 87, 87, 0.72)',
        'orange-search': 'rgba(235, 87, 87, 0.9)',
        'dark-gray': '#4F4F4F',
        'black': '#333333',
      },
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        mulis: ['Mulish', 'sans-serif'],
      },
      dropShadow: {
        'sm': '0px 1px 6px rgba(0, 0, 0, 0.1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
