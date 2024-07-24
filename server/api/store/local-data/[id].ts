import type { Product } from '~~/types/store'
import { productData } from './all'

export default defineEventHandler(async (event): Promise<Product> => {
  const { id } = event.context.params

  const product: Maybe<Product> = productData.products.find(
    (product) => +product.id === +id,
  )
  if (!product) {
    throw createError({
      statusCode: 404,
      message: 'Product not found.',
    })
  }

  return product
})
