<script setup lang="ts">
  import { isCurrentRoute } from '@/composables/nav'

  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <v-btn-square
        v-for="(navlink, index) in navlinks"
        :key="index"
        :to="navlink.link"
        :text="navlink.text"
        :variant="isCurrentRoute(navlink, currentPath) ? 'flat' : 'text'"
      >
      </v-btn-square>
    </div>
    <v-btn
      class="ml-3"
      target="_blank"
      href="https://vuedesigner.com"
      size="large"
      color="secondary"
      trailing
      ><span>Try Now</span>
      <template #append>
        <v-icon icon="i-mdi-pine-tree" class="-ml-1 mr-1" size="24px"></v-icon>
      </template>
    </v-btn>
  </div>
</template>
<style scoped></style>
