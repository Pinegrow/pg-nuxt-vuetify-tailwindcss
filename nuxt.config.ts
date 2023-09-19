// import { fileURLToPath, URL } from 'node:url'
import presetIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  // ssr: false,
  runtimeConfig: {
    public: {
      title: `Vue Designer`,
      description: 'Vue Designer Nuxt Vuetify Tailwind CSS',
      author: 'Pinegrow',
      nav: [
        { text: 'Home', link: '/' },
        { text: `Store`, link: '/store' },
        { text: `Quick Start`, link: '/quick-start' },
        { text: 'Subscribe', link: '/subscribe' },
      ],
    },
    app: {
      baseURL: '/',
    },
  },
  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    // '@nuxt/devtools',
    '@nuxt/content',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
    // '@nuxt/ui',
    '@nuxtjs/html-validator',
    '@nuxt/image',
  ],
  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // default value (can be removed), nuxt/ui uses the unocss format for icon names
      devtoolsKey: 'devtools', // see plugins/devtools.client.ts
      tailwindcss: {
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // restartOnConfigUpdate: true,
        restartOnThemeUpdate: true,
      },
      vuetify: {
        configPath: 'vuetify.config.ts',
        themePath: false, // Set to false so that tailwind Design Panel is used instead of Vuetify
        utilities: false,
        // restartOnConfigUpdate: true,
        // restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./my-awesome-lib/web-types.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },

  // Vuetify's global styles
  css: [
    '~/assets/css/main.css', // Used for global styles. This file is generally configured as cssPath with Pinegrow Vuetify Plugin
    '~/assets/vuetify/main.scss', // If customizing Vuetify sass variables
    'lite-youtube-embed/src/lite-yt-embed.css',
  ],
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Vuetify Nuxt module, thanks Joaquín (userquin)
  vuetify: {
    moduleOptions: {
      /* If customizing sass variables of vuetify components */
      styles: {
        configFile: 'assets/vuetify/settings.scss',
      },
      includeTransformAssetsUrls: true,
      //...
    },

    vuetifyOptions: './vuetify.config.ts', // This file is generally configured as configPath with Pinegrow Vuetify Plugin
  },

  // Required when customizing Vuetify sass variables via configFile with SSR enabled - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-sass-variables
  experimental: {
    inlineSSRStyles: false,
  },

  image: {
    domains: ['images.unsplash.com', 'fakestoreapi.com'],
    alias: {
      unsplash: 'https://images.unsplash.com',
    },
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'jpg',
          width: 80,
          height: 80,
        },
      },
      // product: {
      //   modifiers: {
      //     format: 'jpg',
      //     // width: 50,
      //     height: 256,
      //   },
      // },
    },
  },

  content: {
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      theme: 'dracula-soft',
    },
  },
  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // default prefix, do not change
      }),
    ],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },
})
