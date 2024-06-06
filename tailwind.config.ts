import {
  pg_colors,
  pg_fonts,
  pg_backgrounds,
} from './themes/pg-tailwindcss/tokens.cjs'

import { getFontsWithFallback } from './utils/font'

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
      '{.,*-layer}/components/**/*.{js,vue,ts}',
      '{.,*-layer}/layouts/**/*.vue',
      '{.,*-layer}/pages/**/*.vue',
      '{.,*-layer}/plugins/**/*.{js,ts}',
      '{.,*-layer}/nuxt.config.{js,ts}',
      '{.,*-layer}/vuetify.config.{js,ts}',
      '{.,*-layer}/app.vue',
      '{.,*-layer}/*.{mjs,js,ts}',
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  },
}
