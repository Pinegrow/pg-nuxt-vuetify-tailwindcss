export const useProduct = async (productId: number) => {
  // const { data, error } = await useFetch(
  //   `/api/store/external-data/${productId}`,
  // )
  const { data: product, error } = await useFetch(
    `/api/store/local-data/${productId}`,
  )

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch product id ${productId}.`,
    })
  }

  return product.value
}
