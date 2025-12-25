/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#08f7b3',
        'background-light': '#f8fafc',
        'background-dark': '#0f172a',
        'surface-light': '#ffffff',
        'surface-dark': '#1e293b',
        'text-main-light': '#0f172a',
        'text-main-dark': '#f8fafc',
        'text-muted-light': '#475569',
        'text-muted-dark': '#94a3b8',
        'accent-dark': '#047857',
        'accent-light': '#10b981',
      },
      fontFamily: {
        display: ['Atkinson Hyperlegible', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
