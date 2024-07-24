<script setup lang="ts">
  const { fetchProducts } = useProducts()
  const allProducts = await fetchProducts()
  const productsWithBadges = allProducts.filter((product) => product.badge)
</script>
<template>
  <div>
    <v-container class="py-8">
      <div class="-tracking-wide flex font-bold justify-center text-5xl">
        <span class="text-center text-primary">Hot Deals</span>
        <v-icon class="ml-2 text-5xl" icon="i-twemoji-fire" />
      </div>
      <section
        data-pg-name="Products"
        class="flex flex-wrap justify-center mt-8"
      >
        <ProductCard
          v-for="(product, index) in productsWithBadges"
          :key="index"
          v-bind="product"
        />
      </section>
    </v-container>
  </div>
</template>
<style scoped></style>
