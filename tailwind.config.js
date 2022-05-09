function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    './resources/**/*.{edge,js,ts,vue,jsx,tsx}' // 👈
  ],
  theme: {
    colors: {
      primary: withOpacityValue('--color-primary'),
      secondary: withOpacityValue('--color-secondary'),
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}