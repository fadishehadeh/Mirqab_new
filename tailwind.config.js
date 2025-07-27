/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#243570',
        accent: '#621444',
        charcoal: '#1F2937',
        secondary: '#F5F5F5',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937',
            h1: {
              color: '#243570',
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.2',
            },
            h2: {
              color: '#243570',
              fontWeight: '600',
              fontSize: '2rem',
              lineHeight: '1.3',
            },
            h3: {
              color: '#243570',
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '1.4',
            },
            strong: {
              color: '#243570',
              fontWeight: '600',
            },
            a: {
              color: '#621444',
              '&:hover': {
                color: '#243570',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
