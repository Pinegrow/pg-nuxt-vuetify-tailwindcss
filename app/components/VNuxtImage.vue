<script setup lang="ts">
  /* The BaseImage is a v-img wrapper that is generally used in simple cases as a cover image with a src (required) and optionally - cover (true by default) and alt. If width, height are passed, they are used for optimizing the image, and not passed to v-img.

  If using other props of v-img, then use the v-img directly and optimize the src using optimizeImage(src) from the useOptimizeImage composable which returns back srcset, sizes, src, lazySrc and optionally bgStyles (for background images) and directly bind them to v-img. Refer to index.vue hero images for an example. */

  import { baseImageProps } from './_nuxtImage.mjs'
  const props = defineProps(baseImageProps)

  const { optimizeImage } = useOptimizeImage()
  const { src, bgStyles } = props
  // modifiers
  const { width, height, fit, format, quality, background } = props
  // options
  const { provider, preset, densities, sizes, preload, placeholder } = props

  const modifiers = {
    ...props.modifiers,
    width,
    height,
    fit,
    format,
    quality,
    background,
  }

  const options = {
    provider,
    preset,
    densities,
    modifiers,
    sizes,
    preload,
    placeholder,
  } as any

  const { alt, cover } = props

  const imgOptions = {
    alt,
    cover,
    ...optimizeImage(src, options, bgStyles),
  }
</script>

<template>
  <v-img v-if="src" v-bind="imgOptions" />
</template>

<style scoped></style>
