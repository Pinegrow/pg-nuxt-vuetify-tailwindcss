import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      prefix: 'i-', // default prefix, do not change
    }),
  ],
  content: {
    pipeline: {
      get include() {
        const _content = [
          './components/**/*.{js,vue,ts}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './plugins/**/*.{js,ts}',
          './nuxt.config.{js,ts}',
          './vuetify.config.{js,ts}',
          './app.vue',
          '*.{mjs,js,ts}',
        ]
        return process.env.NODE_ENV === 'production'
          ? _content
          : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
      },
    },
  },
})
