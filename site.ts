export default {
  name: 'VuCommerce',
  description: 'Vue Designer Nuxt Vuetify Tailwind CSS',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-nuxt-vuetify-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-vuetify-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    // {
    //   text: 'Contact Us',
    //   link: '/contact-us',
    //   type: 'secondary',
    //   icon: 'i-material-symbols-add-call',
    // },
    // {
    //   text: 'Help & FAQs',
    //   link: '/help-faqs',
    //   type: 'secondary',
    //   icon: 'i-material-symbols-contact-support-outline',
    // },
  ],
}
