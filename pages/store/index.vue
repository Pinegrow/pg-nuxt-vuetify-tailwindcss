<script setup lang="ts">
  definePageMeta({
    title: 'Store',
    navOrder: 2,
  })

  useHead({
    title: 'Store',
  })

  const data = await useProducts()
  const { products, categories } = data.value

  const filteredCategories = useState('filteredCategories', () => {
    return new Set()
  })

  const toggleFilter = (category) => {
    if (filteredCategories.value.has(category)) {
      filteredCategories.value.delete(category)
    } else {
      filteredCategories.value.add(category)
    }
  }

  const filteredProducts = computed(() => {
    if (filteredCategories.value.size) {
      return products.filter((product) =>
        filteredCategories.value.has(product.category),
      )
    } else {
      return products
    }
  })
</script>
<template>
  <div class="pb-16">
    <StoreHeader />
    <v-container>
      <section class="flex items-center justify-center m-4">
        <span class="font-bold mt-2 text-sm">Filter Category</span>
        <div class="ml-4 mt-2">
          <v-btn
            v-for="(category, index) in categories"
            :key="index"
            :text="category"
            :variant="filteredCategories.has(category) ? 'tonal' : 'outlined'"
            class="mr-2"
            @click="toggleFilter(category)"
          ></v-btn>
        </div>
      </section>
      <section data-pg-name="Products" class="flex flex-wrap justify-center">
        <ProductCard
          v-for="product in filteredProducts"
          :id="product.id"
          :key="product.id"
          :image="product.image"
          :price="product.price"
          :title="product.title"
          :badge="product.badge"
          :shipping="product.shipping"
        />
      </section>
    </v-container>
  </div>
</template>
<style scoped></style>
