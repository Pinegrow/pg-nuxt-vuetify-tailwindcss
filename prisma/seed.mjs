import { PrismaClient } from '@prisma/client'
const prismaClient = new PrismaClient()

import { $fetch } from 'ofetch'
const productData = await $fetch('http://localhost:3000/api/store/local-data')

async function seed() {
  await prismaClient.products.create({
    data: productData.products,
  })
}

try {
  await seed()
  await prismaClient.$disconnect()
} catch (err) {
  console.log(err)
  await prismaClient.$disconnect()
  process.exit(1)
}
