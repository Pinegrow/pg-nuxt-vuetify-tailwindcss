<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'TheLogo',
  // 	},
  // })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="flex items-center sm:flex-row" to="/">
    <v-icon class="text-4xl" icon="i-fluent-emoji-shopping-bags"></v-icon>
    <h5 class="font-extrabold font-serif ml-2 mt-4 text-2xl">VuCommerce</h5>
  </NuxtLink>
</template>
<style scoped></style>
