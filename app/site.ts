// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'VuCommerce',
  description: 'Vue Designer Nuxt Vuetify Tailwind CSS',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-vuetify-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-vuetify-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [{ title: 'Home', to: '/', icon: 'i-mdi-home' }],
    secondary: [
      // {
      //   title: 'Subscribe',
      //   icon: 'i-mdi-home',
      //   to: '/subscribe',
      // },
    ],
  },
}
