export default {
  theme: {
    extend: {
      screens: {
        xss: '350px', // zFold
        sm: '640px',
        headerMd: '850px',
        xl: '1350px',
        '2xl': '1500px',
        '3xl': '1620px',
        '4xl': '1800px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        xsCard: 'repeat(auto-fill, minmax(16rem, 1fr))',
        smCard: 'repeat(auto-fill, minmax(20rem, 1fr))',
        mdCard: 'repeat(auto-fill, minmax(24rem, 1fr))',
        lgCard: 'repeat(auto-fill, minmax(28rem, 1fr))',
        xlCard: 'repeat(auto-fill, minmax(32rem, 1fr))',
      },
      colors: {
        main: 'var(--main-color)',
        btnDisabled: 'var(--btn-disabled-color)',
        header: {
          text: 'var(--header-text-color)',
          textHover: 'var(--header-text-color-hover)',
          navTab: 'var(--header-coming-tab-bg)',
          loginBorder: 'var(--header-login-border-color)',
          loginBorderHover: 'var(--header-login-border-color-hover)',
        },
        placeholder: 'var(--input-placeholder-color)',
        input: 'var(--input-color)',
        subText: 'var(--sub-text-color)',
        error: 'var(--error-color)',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
  ],
}
