export const useProduct = () => {
  // Optimize any image urls in the data contents
  const { optimizeImage } = useOptimizeImage()

  const fetchProduct = async (productId: number) => {
    // Hint nitro to prerender a JSON file for this endpoint
    // Keep it on the top before any await calls so that it's within the nuxt context
    prerenderRoutes(`/api/store/local-data/${+productId}`)

    // const { data: product, error } = await useFetch(
    //   `/api/store/external-data/${productId}`)
    const { data: product, error } = await useFetch(
      `/api/store/local-data/${productId}`,
      {
        // Call this endpoint only on the server
        server: true,
      },
    )
    /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
    // const { data, error } = await useAsyncData('product', async () => {
    //   return await $fetch(`/api/store/local-data/${productId}`)
    // })

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Couldn't fetch product id ${productId}.`,
      })
    }

    return product.value.image
      ? {
          ...product.value,
          imageOptimized: optimizeImage(product.value.image),
        }
      : product.value
  }

  return { fetchProduct }
}
