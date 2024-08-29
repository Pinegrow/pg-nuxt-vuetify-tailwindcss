// import { md3 } from 'vuetify/blueprints'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { lightTheme, darkTheme } from './app/utils/theme'

// https://nuxt.vuetifyjs.com/guide/
export default defineVuetifyConfiguration({
  // blueprint: md3,

  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },

  ssr: {
    clientWidth: 100,
    // clientHeight: 100,
  },

  directives: true, // can take an array as well

  // Global components
  components: [
    // 'VDialog',
    // 'VExpansionPanel',
    // 'VExpansionPanelText',
    // 'VExpansionPanelTitle',
  ],

  labComponents: true,
  // labComponents: [
  // 'VDataTable',
  // 'VDatePickerControls',
  // 'VDatePickerHeader',
  // ],

  aliases: {
    VBtnSquare: 'VBtn', // VBtn is automatically added as a global component
    VIconBtn: 'VBtn',
  },

  defaults: {
    global: {
      ripple: false,
    },
    VBtn: {
      color: 'primary',
      variant: 'flat',
      style:
        'letter-spacing:.0178571429em; text-transform:none !important; border-radius:9999px !important',
      class: '',
    },
    VBtnSquare: {
      color: 'primary',
      variant: 'flat',
      minHeight: '40px',
      style:
        'padding-left:12px; padding-right:12px; font-size: 0.875rem !important;line-height: 1.25rem !important;font-weight: 500 !important;line-height: 1.25rem;letter-spacing: .0178571429em !important; text-transform:none !important; border-radius:0.5rem !important;',
      class: '',
    },
    VIconBtn: {
      color: 'primary',
      variant: 'flat',
      minHeight: '40px',
      style:
        'padding-left:12px; padding-right:12px; font-size: 0.875rem !important;line-height: 1.25rem !important;font-weight: 500 !important;line-height: 1.25rem;letter-spacing: .0178571429em !important; text-transform:none !important; border-radius:0.5rem !important;width: inherit;height: inherit;',
      class: '',
    },
    VTextField: {
      color: 'primary',
      variant: 'outlined',
      density: 'compact',
    },
  },

  display: {
    mobileBreakpoint: 'xs',
    // thresholds: {
    //   xs: 0,
    //   sm: 600,
    //   md: 960,
    //   lg: 1280,
    //   xl: 1920,
    //   xxl: 2560,
    // },
    // Using Tailwind ones here
    thresholds: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  date: {
    // adapter: 'vuetify', // 'vuetify' | 'date-fns' | 'moment' | 'luxon' | 'dayjs' | 'js-joda' | 'date-fns-jalali' | 'jalaali' | 'hijri' | 'custom'
  },

  icons: {
    defaultSet: 'unocss-mdi',
  },

  /* locale: {
    messages: {
      en: {
        hello: 'Hi',
        question: {
          one: 'One',
          two: 'Two',
        },
      },
      es: {
        hello: 'Hola',
        question: {
          one: 'Uno',
          two: 'Dos',
          three: 'Tres',
        },
      },
    },
  },
  localeMessages: ['en', 'es', 'ar'], */
})
