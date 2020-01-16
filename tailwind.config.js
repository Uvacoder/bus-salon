const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        pink: '#db4068',
        middlepink: '#e59795',
        pastel: '#fbf0f0',
        brown: '#362e31'
      },
      spacing: {
        '14': '3.5rem',
      },
      maxWidth: {
        '7xl': '1240px',
        '8xl': '1380px',
      },
      fontSize: {
        '1xl': '1.35rem',
      },
      fontFamily: {
        body: [
          'BrandonTextWeb-Regular',
          ...defaultTheme.fontFamily.sans,
        ],
        branbold: [
          'BrandonTextWeb-Medium',
          ...defaultTheme.fontFamily.sans,          
        ]
      },
    }
  },
  variants: {},
  plugins: []
}
