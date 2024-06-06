<script setup lang="ts">
  import site from '@/site'
  const { name, logo } = site
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <v-icon class="text-4xl" :icon="logo"></v-icon>
    <h5 class="font-extrabold font-serif ml-2 mt-4 text-2xl">{{ name }}</h5>
  </NuxtLink>
</template>
<style scoped></style>
