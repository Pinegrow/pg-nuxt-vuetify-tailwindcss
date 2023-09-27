<script setup lang="ts">
  import { Product } from '../types/store'
  const { id, title, price, image, imageOptimized, badge, shipping } =
    defineProps<Product>()
</script>
<template>
  <NuxtLink class="m-4 w-full md:w-1/3 lg:w-1/4 xl:w-1/5" :to="`/store/${id}`">
    <v-card border variant="outlined" class="md:h-full">
      <div v-if="badge" class="absolute right-0 z-10">
        <v-chip :text="badge" color="primary"></v-chip>
      </div>
      <div class="h-64 relative">
        <div class="-m-4 bg-white p-8 rounded-lg">
          <!-- <v-img
            v-if="imageOptimized"
            :src="imageOptimized.imageSrc"
            :srcset="imageOptimized.imageSizes.srcset"
            :sizes="imageOptimized.imageSizes.sizes"
            height="250"
          >
          </v-img> -->
          <v-img v-if="image" :src="image" height="250"> </v-img>
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
