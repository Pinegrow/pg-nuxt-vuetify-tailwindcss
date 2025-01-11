<script setup lang="ts">
  const { navsPrimary } = useNavMenu()
  const { isMobileMenuOpen } = useMobileMenu()
</script>
<template>
  <div
    class="flex flex-col justify-center md:space-y-0 space-y-4 md:flex md:flex-row md:items-center md:space-x-4"
  >
    <TheLogo class="mb-6 md:hidden" />
    <NuxtLink
      v-for="(nav, index) in navsPrimary"
      :key="index"
      :to="nav.to"
      class="hover:text-primary underline-offset-8"
      color="gray"
      active-class="text-primary underline"
      exact
      @click="isMobileMenuOpen = false"
      >{{ nav.title }}</NuxtLink
    >
  </div>
</template>
<style scoped></style>
