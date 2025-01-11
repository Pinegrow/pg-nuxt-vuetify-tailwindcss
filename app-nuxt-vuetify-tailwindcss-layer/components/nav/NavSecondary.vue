<script setup lang="ts">
  const { navsSecondary } = useNavMenu()

  const dropdownItems = navsSecondary.map((nav) => ({
    slot: nav.to.replace(/^\//, '').replaceAll('/', '-'),
    label: nav.title,
    icon: nav.icon,
    to: nav.to,
    activeClass: 'text-primary',
  }))
</script>
<template>
  <v-list-item
    v-for="(item, index) in dropdownItems"
    :key="index"
    :value="index"
    :to="item.to"
    :title="item.label"
    :prepend-icon="item.icon"
  />
</template>
<style scoped></style>
