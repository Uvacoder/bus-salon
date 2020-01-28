const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      'xs': '320px',
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
        brown: '#362e31',
        middlebrown: '#4b3e42'
      },
      spacing: {
        '14': '3.5rem',
        '36': '9rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem',
        'bloc650': '650px',
        'bloc800': '800px',
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
