import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.cjs'

import { getFontsWithFallback } from './app/utils/font'

export default {
  important: true,
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'), // conflicts with vuetify, so turned it off
    require('@pinegrow/tailwindcss-plugin').default({
      colors: pg_colors, // primary, secondary etc
      fonts: getFontsWithFallback(pg_fonts),
      backgrounds: pg_backgrounds, // bg-design-image, bg-design-image-large
    }),
  ],

  get content() {
    const _content = [
      '{.,app,*-layer}/components/**/*.{js,vue,ts}',
      '{.,app,*-layer}/layouts/**/*.vue',
      '{.,app,*-layer}/pages/**/*.vue',
      '{.,app,*-layer}/plugins/**/*.{js,ts}',
      '{.,app,*-layer}/app.vue',
      '{.,app,*-layer}/*.{mjs,js,ts}',
      '{.,*-layer}/nuxt.config.{js,ts}',
      '{.,*-layer}/vuetify.config.{js,ts}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
