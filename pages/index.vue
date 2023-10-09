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
    <HeroSection />
    <div class="container mx-auto pt-8">
      <LaunchSale class="mt-8" />
      <HotDeals class="mt-8" />
    </div>
  </main>
</template>
<style scoped></style>
