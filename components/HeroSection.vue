<script setup lang="ts">
  import { pg_background_urls } from '~~/themes/pg-tailwindcss/tokens.mjs'

  const { optimizeImage, optimizeImages } = useOptimizeImage()

  const heroImageUrl =
    pg_background_urls['design-image-large'] ||
    pg_background_urls['design-image']

  const heroImageOptimized = optimizeImage(heroImageUrl)

  const avatarImageUrls = [
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQyfHxwcm9maWxlfGVufDB8fHx8MTY4NzE2ODcyNnww&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1573495612522-d994e72e5f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE4fHxhZnJpY2FuJTIwY29tcHV0ZXIlMjB3b21hbnxlbnwwfHx8fDE2ODcxNjg5NzV8MA&ixlib=rb-4.0.3&q=80&w=200',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDJ8fGF2YXRhcnxlbnwwfHx8fDE2OTUxMDA0OTV8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=40&h=40&fit=crop',
  ]

  const avatarImageUrlsOptimized = optimizeImages(avatarImageUrls, 'avatar')
</script>
<template>
  <section>
    <v-img
      :src="heroImageOptimized.imageSrc"
      :srcset="heroImageOptimized.imageSizes.srcset"
      :sizes="heroImageOptimized.imageSizes.sizes"
      :max-height="800"
      cover
    >
      <div
        class="pb-36 pt-2 px-6 relative rounded-3xl md:pb-48 lg:pb-72 lg:px-12"
      >
        <div
          class="-mx-4 flex flex-wrap items-center justify-center lg:space-y-0 mt-24 space-y-6"
        >
          <div class="px-4 text-center w-full md:w-8/12 xl:w-6/12">
            <h4
              class="font-bold font-serif mb-1 text-secondary-600 dark:text-secondary-200 uppercase"
            >
              Welcome to
            </h4>
            <h1 class="capitalize leading-tight mb-2 text-white">
              Vue Designer
            </h1>
            <h5 class="mb-6 text-gray-50">
              A desktop drag-and-drop editor for Mac, Windows and Linux that
              lets you visually design your Vue apps.
            </h5>
            <v-card class="mt-4 pb-2 pt-2" color="background">
              <template #text>
                <v-avatar
                  v-for="(avatar, index) in avatarImageUrlsOptimized"
                  :key="index"
                  size="x-large"
                  alt="avatar"
                  :image="avatar.imageSrc"
                ></v-avatar>
              </template>
            </v-card>
            <v-btn
              href="https://vuedesigner.com"
              target="_blank"
              class="mt-4"
              text="Learn More!"
              size="large"
            >
              <template #append>
                <v-icon
                  icon="i-material-symbols-open-in-new"
                  height="24px"
                  class="-ml-1 mr-1"
                ></v-icon>
              </template>
            </v-btn>
          </div>
        </div>
      </div>
    </v-img>
  </section>
</template>
<style scoped></style>
