<script setup lang="ts">
  const { navlinksSecondary } = useNav()

  const dropdownItems = navlinksSecondary.value.map((navlink) => ({
    slot: navlink.link.replace(/^\//, '').replaceAll('/', '-'),
    label: navlink.text,
    icon: navlink.icon,
    to: navlink.link,
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
