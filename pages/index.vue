<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    navOrder: 1,
  })

  useHead({
    title: () => 'Home',
  })
</script>
<template>
  <main>
    <main><span>A Fresh Start!</span><DarkModeSwitch /></main>
  </main>
</template>
<style scoped></style>
