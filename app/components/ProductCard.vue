<script setup lang="ts">
  import type { Product } from '~~/types/store'
  const { id, title, price, image, imageOptimized, badge, shipping } =
    defineProps<Product>()
</script>
<template>
  <NuxtLink
    class="m-4 relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5"
    :to="`/store/${id}`"
    ><span
      v-if="badge"
      class="absolute bg-primary font-serif p-1 right-0 rounded-bl-md rounded-br-none rounded-tl-none rounded-tr-sm text-white text-xs z-10"
      >{{ badge }}</span
    >
    <v-card border variant="outlined" class="md:h-full">
      <div class="h-64 relative">
        <div class="-m-4 bg-white p-8 rounded-lg">
          <div>
            <v-img
              v-if="imageOptimized"
              :src="imageOptimized.src"
              :srcset="imageOptimized.srcset"
              :sizes="imageOptimized.sizes"
              height="250"
            />
            <v-img v-else :src="image" height="250" />
          </div>
        </div>
      </div>
      <v-card-text class="mt-14">
        <div>
          <span class="text-base">{{ title }}</span>
          <div class="flex font-medium items-center justify-between mt-4">
            <span class="font-bold text-base">${{ price }}</span>
            <v-chip
              v-if="shipping"
              class="dark:text-primary-400 text-primary-500 text-xs"
              size="small"
              color="primary"
              >{{ shipping }}</v-chip
            >
          </div>
        </div>
      </v-card-text>
    </v-card>
  </NuxtLink>
</template>
<style scoped></style>
