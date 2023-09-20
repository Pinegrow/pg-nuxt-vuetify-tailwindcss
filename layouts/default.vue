<script setup lang="ts">
  /* Vuetify useTheme will not work with SSR enabled, more info - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-themes */
  // import { useCustomTheme } from '~/composables/custom-theme'
  // const { isDark } = useCustomTheme()

  /* Update on using the above technique - We now use SSR HTTP Client hints technique instead of the above - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#ssr-http-client-hints */
</script>

<template>
  <v-app>
    <!-- <v-app :theme="isDark ? 'dark' : 'light'"> -->
    <v-main>
      <v-card class="mx-auto">
        <div>
          <MetaTags />
          <div
            class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
          >
            <!-- <NavBar class="fixed bg-white dark:bg-neutral-950 shadow z-20" /> -->
            <!-- <div class="mt-24 shadow"> -->
            <slot />
            <!-- </div> -->
            <!-- <TheFooter /> -->
          </div>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>
<style></style>
