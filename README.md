# VuCommerce Store - Fullstack app with beautiful, accessible components from Vuetify library, styled with Tailwind CSS

Nuxt 3 Full stack (SPA-SSR) quick start template that pre-includes the [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module), [Vuetify](https://vuetifyjs.com/en/introduction/why-vuetify/), [Pinegrow Vuetify Plugin](https://www.npmjs.com/package/@pinegrow/vuetify-plugin) and other goodies for Vue Designer. This template uses the amazing Vuetify component library and features an eCommerce store, where data is fetched via APIs server by server routes (Nitro-powered).

Demo - https://pg-nuxt-vuetify-tailwindcss.netlify.app/

## Vue Designer

A desktop visual editor for Vue apps supporting Mac, Windows, and Linux by [Pinegrow](https://pinegrow.com/). Take it for a free trial at [Vue Designer](https://vuedesigner.com)!

It lets you visually design 🎨 your Vue single file components and boosts your productivity and creativity while building your component-based Vue apps.

It smartly integrates with your ⚡️ [Vite](https://vitejs.dev/) based CLI and provides an amazing developer experience with its powerful visual controls and features.

Clean code 😃, No lock-in - You are in control of your projects and development workflow ❤️

## Try it now!

### 1. Clone to local

[Create a repo from this template on GitHub](https://github.com/pinegrow/pg-nuxt-vuetify-tailwindcss/generate).

(or)

If you prefer to do it manually with the cleaner git history

```bash
npx giget@latest gh:pinegrow/pg-nuxt-vuetify-tailwindcss my-nuxt-vuetify-tailwindcss-app #project-name
cd my-nuxt-vuetify-tailwindcss-app
npm install #or use pnpm
```

(or)

If you prefer a minimal template (a single empty home page) instead,

```bash
npx giget@latest gh:pinegrow/pg-nuxt-vuetify-tailwindcss#minimal my-nuxt-vuetify-tailwindcss-app #project-name
cd my-nuxt-vuetify-tailwindcss-app
npm install #or use pnpm
```

## 2. Open in Vue Designer

Open your project in Vue Designer and follow the instructions displayed in the Config Panel (that should pop out automatically). Config Panel ⚙️ displays the key packages and the various links to their individual ecosystems and communities.

## Usage

### Start your development server

```bash
npm run dev
```

### Build

```bash
npm run build # SPA SSR,
npm run generate # SPA SSG (full-static)
```

### Analyze

```bash
npm run analyze # bundle sizes
```

### Preview

```bash
npm run now # build & preview
```

### Lighthouse

```bash
npm run unlighthouse # Uses npx unlighthouse from https://unlighthouse.dev/ to run lighthouse on entire site (all pages)
```

### Deploy to Netlify

This project is built and deployed as a fully static site (SSG with `npm run generate`), with no API calls made from the client side. To build it as an SSR app, update the Nitro preset in `nuxt.config.ts` and build with `npm run build` command.

You can deploy this repo as a site on your own to explore and experiment with, by clicking this button.
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/pg-nuxt-vuetify-tailwindcss)

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Pre-packed

### Meta Framework (Vue-based)

- [Nuxt](https://nuxt.com/) - The Intuitive Vue Framework
  - 👉 Follow the Nuxt docs for the amazing list of [features](https://nuxt.com/docs/getting-started/introduction).
  - 🚦 [Nuxt-Router](https://nuxt.com/docs/getting-started/routing), based on the official [Vue-Router](https://vuejs.org/guide/introduction.html) and enables file-based routing.
  - SSR friendly `useState` composable to share state across components.

### UI Frameworks

- [Vuetify](https://vuetifyjs.com/en/introduction/why-vuetify/) - Hundreds of beautifully handcrafted Vue components, easily customizable with a powerful set of utilities, composables and directives.

  - 👉 Note: This template turns off Vuetify utilities, and instead use Tailwind CSS instead for styling.

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs#3) - The amazing utility-first CSS framework.

  - 👉 Note: This template turns off Vuetify utilities, and instead use Tailwind CSS instead for styling.
  - **ACTION REQUIRED**: In order to resolve Vuetify's !important in default theme, tailwind.config.ts includes (currently commented-out) the `important: true` setting.

- [Nuxt Vuetify Module](https://nuxt.vuetifyjs.com/) - This zero-config Nuxt module helps you set up Vuetify in your Nuxt application in seconds. Provides an amazing abstraction over the necessary setup enabling automatic tree-shaking, ability to use Pure CSS icons (UnoCSS Preset icons), supports Nuxt layers and hooks, and more...
  - 👉 provides a new icon-set for Vuetify called `unocss-mdi`. In order to use all iconsets in Vue Designer's icon-picker, follow the instructions displayed in Vue Designer's Config Panel under the **Icon Picker** tab. Also refer to the nuxt module's official documentation [here](https://nuxt.vuetifyjs.com/guide/icons/unocss-preset-icons.html).

### File-based CMS (markdown)

- [Nuxt Content](https://github.com/nuxt/content) - file-based CMS powered by Markdown & Vue components. Note: This page is a markdown file 🗒.

### Icons

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - use over 100,000 open-source [Iconify](https://iconify.design/) icons. Uses the **unocss** format for icon names, for example, `i-mdi-home`. Note: The above Nuxt Vuetify module easily integrates UnoCSS Preset Icons into your Vuetify components with no effort.

### Modules/Plugins

- [Pinegrow Nuxt Module](https://www.npmjs.com/package/@pinegrow/nuxt-module) - enables you to live-design your Vue single-file components visually in Vue Designer.
- [Pinegrow Vuetify Plugin](https://www.npmjs.com/package/@pinegrow/vuetify-plugin) - via Design Panel, enables theme customization (optional) and visual controls for Vuetify utilities. Note: This is an addon that's licensed separately to Pinegrow apps (like Vue Designer).
- [Pinegrow Tailwind CSS Plugin](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - via Design Panel, enables visual controls customization (automatic) and theme customization (optional).
- [VueUse](https://vueuse.org/) - collection of essential Vue composition utilities.
- 🍍 [Pinia](https://pinia.vuejs.org/ssr/nuxt.html) stores for global state management via the `@pinia/nuxt module`. Its light-weight, type-safe, extensible, modular with vue-devtools support.
- [VeeValidate](https://vee-validate.logaretm.com/v4/integrations/nuxt/) takes care of value tracking, validation, errors, submissions and more.
- [Nuxt Image](https://image.nuxt.com/) - Plug-and-play image optimization for Nuxt apps.
- [Nuxt SEO](https://nuxtseo.com/) - Amazing collection of hand-crafted Nuxt Modules for all SEO needs with a unified site config. Includes `nuxt-site-config`, `nuxt-simple-robots`, `nuxt-simple-sitemap`, `nuxt-og-image`, `nuxt-link-checker`, `nuxt-seo-utils`, `nuxt-schema-org`.
  - OG images and nuxtseo features can be previewed with nuxt-devtools during development. OG images can also be viewed using URL in this form - `/__og-image__/image/<path>/og.<extension>`

### Devtools

- [Nuxt Devtools](https://devtools.nuxtjs.org) - Enhance your DX (developer experience) with an amazing set of in-app features.
- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - Official devtools that can be used as a standalone app alongside Vue Designer. It's configured as a Nuxt plugin (only during development).
  - **ACTION REQUIRED**: Currently deactivated. In `plugins/devtools.client.ts`, uncomment to activate.

### VS Code Extensions

- [VS Code Extensions](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org) with [@nuxt/eslint](https://eslint.nuxt.com/packages/module) Nuxt ESLint module that adopts ESLint 9 with a new flat config.
- [Prettier](https://prettier.io) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - format without conflicting with eslint rules.

### Typescript

This project allows JS, and strict mode is turned off. Update `tsconfig.ts` as required.

```json
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "strict": false
  }
}
```

## Community

- [Vue Designer Community](https://discord.gg/BYp45Nnu5T)
