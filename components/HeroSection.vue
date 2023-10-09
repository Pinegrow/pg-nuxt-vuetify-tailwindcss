<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const { optimizeImage, optimizeImages } = useOptimizeImage()
  const heroImageOptimized = optimizeImage(heroImageUrl)
</script>
<template>
  <section>
    <!-- <v-img
      :src="heroImageOptimized.imageSrc"
      :srcset="heroImageOptimized.imageSizes.srcset"
      :sizes="heroImageOptimized.imageSizes.sizes"
      :max-height="800"
      cover
    > -->
    <v-img :src="heroImageUrl" :max-height="600" cover>
      <div class="container flex flex-col h-full justify-end mx-auto">
        <div class="flex flex-col items-end pb-8 px-4 w-full md:pb-20">
          <h2
            class="capitalize font-serif leading-tight mb-2 md:w-96 text-primary text-right w-60 xl:w-full"
          >
            Style Up Your Life!
          </h2>
          <v-btn
            text="Shop Now"
            variant="elevated"
            size="large"
            class="mt-4"
            to="/women"
          ></v-btn>
        </div>
      </div>
    </v-img>
  </section>
</template>
<style scoped></style>
