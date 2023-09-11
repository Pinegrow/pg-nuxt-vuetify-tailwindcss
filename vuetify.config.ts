// import { md3 } from 'vuetify/blueprints'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { lightTheme, darkTheme } from './utils/theme'

// https://vuetify-nuxt-module.netlify.app/guide/
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

  labComponents: [
    // 'VDataTable',
    // 'VDatePickerControls',
    // 'VDatePickerHeader',
  ],

  aliases: {
    VBtnSquare: 'VBtn', // VBtn is automatically added as a global component
  },

  defaults: {
    global: {
      ripple: false,
    },
    VBtn: {
      color: 'primary',
      variant: 'flat',
      style: 'letter-spacing:.0178571429em',
      class: '!normal-case !rounded-full',
    },
    VBtnSquare: {
      color: 'primary',
      variant: 'flat',
      minHeight: '40px',
      style: 'padding-left:12px; padding-right:12px;',
      class:
        '!text-sm !font-medium leading-5 !tracking-[.0178571429em]  !normal-case !rounded-lg',
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
