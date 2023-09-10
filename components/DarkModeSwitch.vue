<script setup lang="ts">
  /* Vuetify useTheme will not work with SSR enabled, more info - https://vuetify-nuxt-module.netlify.app/guide/server-side-rendering.html#vuetify-themes */
  // import { useCustomTheme } from '~/composables/custom-theme'
  // const { isDark, toggleDark } = useCustomTheme()

  import { isDark, toggleDark } from '@/composables/dark'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    toggleDark()
  }
</script>
<template>
  <v-btn
    variant="plain"
    class="!rounded-lg mx-3"
    aria-label="Toggle theme"
    @click="toggleTheme"
  >
    <transition name="slide" mode="out-in">
      <v-icon
        v-if="isDark"
        icon="i-material-symbols-dark-mode-outline"
        class="text-2xl"
      >
      </v-icon>
      <v-icon
        v-else
        icon="i-material-symbols-light-mode-outline"
        class="text-2xl"
      >
      </v-icon>
    </transition>
  </v-btn>
</template>
<style lang="postcss">
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.15s ease;
  }

  .slide-enter-from {
    transform: translateY(-100%);
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
  }

  .slide-leave-to {
    transform: translateY(100%);
  }
</style>
