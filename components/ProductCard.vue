<script setup lang="ts">
  defineProps({
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      required: true,
    },
    shipping: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <NuxtLink class="m-4 w-full md:w-1/3 lg:w-1/4 xl:w-1/5" :to="`/store/${id}`">
    <v-card border variant="outlined" class="md:h-full">
      <div class="h-64 relative">
        <div class="-m-4 bg-white p-8 rounded-lg">
          <v-img :src="image" height="250">
            <v-chip
              v-if="badge"
              class="absolute z-10"
              :text="badge"
              color="primary"
            ></v-chip>
          </v-img>
        </div>
      </div>
      <v-card-text class="mt-14">
        <div>
          <span class="text-base">{{ title }}</span>
          <div class="flex font-medium items-center justify-between mt-4">
            <span class="font-bold text-base">${{ price }}</span>
            <v-chip
              v-if="shipping"
              class="dark:text-primary-400 text-primary-500 text-xs"
              size="small"
              color="primary"
              >{{ shipping }}</v-chip
            >
          </div>
        </div>
      </v-card-text>
    </v-card>
  </NuxtLink>
</template>
<style scoped></style>
