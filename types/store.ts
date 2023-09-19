type Rating = {
  rate: number
  count: number
}

type ImageOptimized = {
  imageSizes?: any
  imageSrc?: string
  imageLazySrc?: string
}

export type Product = {
  id: number
  title: string
  price: string
  description: string
  category: string
  image: string
  imageOptimized?: ImageOptimized
  rating: Rating
  badge: string
  shipping: string
}

export type Products = Product[]

export type Store = {
  products: Products
  categories: string[]
}
