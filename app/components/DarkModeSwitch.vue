<script setup lang="ts">
  // import { ssrClientHintsConfiguration } from 'virtual:vuetify-ssr-client-hints-configuration'

  import { isDark, toggleDark } from '@/composables/dark'
  import { useTheme } from 'vuetify'

  // const ssrClientHints = useNuxtApp().$ssrClientHints
  // const { width, height, md } = useDisplay()
  const theme = useTheme()

  // const enableToogleTheme = computed(() => {
  //   if (
  //     ssrClientHintsConfiguration.prefersColorScheme &&
  //     ssrClientHintsConfiguration.prefersColorSchemeOptions
  //   )
  //     return !ssrClientHintsConfiguration.prefersColorSchemeOptions
  //       .useBrowserThemeOnly
  //   return false
  // })

  const toggleTheme = () => {
    toggleDark()
    theme.global.name.value = isDark.value ? 'dark' : 'light'
  }
</script>
<template>
  <div>
    <v-btn
      variant="tonal"
      class="rounded-lg"
      aria-label="Toggle theme"
      @click="toggleTheme"
    >
      <transition name="slide" mode="out-in">
        <v-icon
          v-if="isDark"
          icon="i-material-symbols-dark-mode-outline"
          class="text-2xl"
        />
        <v-icon
          v-else
          icon="i-material-symbols-light-mode-outline"
          class="text-2xl"
        />
      </transition>
    </v-btn>
  </div>
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
