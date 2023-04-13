// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        initial: 'initial',
        inherit: 'inherit',
        currentColor: 'currentColor',
        transparent: 'transparent',
        standard: '#FFFFFF',
        primary: '#0072ff',
        secondary: '#D7E9FF',
        accent: '#003473',
        success: colors.green[600],
        warning: colors.orange[400],
        danger: colors.red[600],
        info: colors.blue[400],
        'primary-light': '#005bcc',
        'blue-light': '#d8e9ff',
        'blue-light-3': '#d7e9ff',
        'black-80': 'rgba(0, 0, 0, 0.8)',
        'black-100': '#000c',
        dark: '#393939',
        muted: '#6c757d',
      },
    },
  },
};
