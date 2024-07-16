<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = 'Welcome To'
  const heroTitle = 'Vue Designer'
  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'
</script>
<template>
  <section>
    <BackgroundImageWrapper :image-url="heroImageUrl">
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
          />
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
