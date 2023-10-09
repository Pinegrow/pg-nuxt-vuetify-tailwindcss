<script setup lang="ts">
  // const props = defineProps({
  // 	name: {
  // 		type: String,
  // 		default: 'ProfileActions',
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
  <div class="flex-nowrap items-center justify-center space-x-2 w-full">
    <DarkModeSwitch></DarkModeSwitch>
    <v-btn class="rounded-lg" variant="tonal">
      <v-icon class="text-2xl" icon="i-material-symbols-shopping-bag"></v-icon>
    </v-btn>
    <v-btn class="rounded-lg" variant="tonal">
      <v-icon class="text-2xl" icon="i-material-symbols-favorite"></v-icon>
    </v-btn>
  </div>
</template>
<style scoped></style>
