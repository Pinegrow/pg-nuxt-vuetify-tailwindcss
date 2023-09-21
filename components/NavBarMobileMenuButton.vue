<script setup lang="ts">
  import { useMobileMenu } from '@/composables/mobile-menu'
  const { isMobileMenuOpen, openMobileMenu } = useMobileMenu()
</script>
<template>
  <v-icon-btn
    :icon="
      isMobileMenuOpen ? 'i-material-symbols-close' : 'i-material-symbols-menu'
    "
    @click="openMobileMenu"
  >
    <span class="sr-only">Open main menu</span>
    <v-icon
      :icon="
        isMobileMenuOpen
          ? 'i-material-symbols-close'
          : 'i-material-symbols-menu'
      "
      size="20px"
    ></v-icon>
  </v-icon-btn>
</template>
<style lang="scss" scoped>
  // @use '~/assets/vuetify/settings.scss' with (
  //   $button-icon-density: 'compact'
  // );

  // .v-btn--icon {
  //   width: inherit;
  //   height: inherit;
  // }
</style>
