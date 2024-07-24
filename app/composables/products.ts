export const useProducts = () => {
  const fetchProducts = async () => {
    // Hint nitro to prerender a JSON file for this endpoint
    // Keep it on the top before any await calls so that it's within the nuxt context
    prerenderRoutes(`/api/store/local-data/all`)

    // const { data, error } = await useFetch('/api/store/external-data')
    const { data: products, error } = await useFetch(
      '/api/store/local-data/all',
      {
        // Call this endpoint only on the server
        server: true,
      },
    )

    /* The above useFetch is a syntactic sugar of the below useAsyncData & $fetch combo */
    // const { data, error } = await useAsyncData('products', async () => {
    //   return await $fetch('/api/store/local-data')
    // })
    if (error.value) {
      console.log(error.value)
      throw createError({
        ...error.value,
        statusMessage: `Couldn't fetch products.`,
      })
    }

    return products
  }

  return { fetchProducts }
}
