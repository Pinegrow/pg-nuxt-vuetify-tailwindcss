<script setup lang="ts">
  // Enforcing css import order - Tailwind is imported here instead of in nuxt.config.ts css, so that it can override all css imports via nuxt.config.ts
  import '~/assets/css/tailwind.css'
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
  // @use '~/assets/vuetify/settings';
  // .my-button {
  //   height: settings.$button-height;
  // }
  // .v-btn {
  //   @media #{map-get(settings.$display-breakpoints, 'sm-and-down')} {
  //     font-size: 12px;
  //   }
  // }
</style>
