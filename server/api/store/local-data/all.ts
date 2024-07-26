import type { Products, Store } from '~~/types/store'
import { products } from '~~/db.json'

export const productData = {
  products,
  categories: [],
  badges: [
    'Low Stock',
    'Selling Fast!',
    'New!',
    'Presale',
    'Clearance',
    'Get 10% OFF^',
  ],
} as Store

export default defineEventHandler(async (/*event*/): Promise<Products> => {
  productData.categories = [
    ...new Set(products.map((product) => product.category)),
  ]

  productData.badges = [
    ...new Set(
      products
        .filter((product) => product.badge)
        .map((product) => product.badge),
    ),
  ]

  return productData.products
})
