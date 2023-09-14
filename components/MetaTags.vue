<script setup lang="ts">
  import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
  import type { Script } from '@unhead/schema'
  type TurboScript = Script & { once: true }

  const fonts =
    'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Inter:100,200,300,400,500,600,700,800,900&display=swap'
  const googleapis = 'https://fonts.googleapis.com'
  const gstatic = 'https://fonts.gstatic.com'

  const config = useRuntimeConfig()
  const { title, description } = config.public
  const route = useRoute()

  useServerSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })

  useHead({
    title: computed(() => route.meta.title),
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    htmlAttrs: { lang: 'en-US' },
    meta: [
      { property: 'keywords', content: route.meta.tags?.toString() },
      { property: 'author', content: 'Pinegrow' },
    ],
    script: [{ innerHTML: checkDarkTheme, once: true } as TurboScript],
    // prefetch fira font
    link: [
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fonts,
      },
    ],
    noscript: [
      `<link rel="stylesheet" crossorigin="anonymous" href="${fonts}" />`,
    ],
  })
</script>

<template>
  <Head>
    <Meta
      name="twitter:image"
      content="https://icons.vuetelescope.com/framework/nuxt.svg"
    />
    <Meta name="twitter:image:alt" content="Nuxt" />
    <Meta name="twitter:site" content="@pinegrow" />
    <Meta name="twitter:card" content="summary" />
    <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </Head>
</template>
