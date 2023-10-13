<script setup>
  import '~/assets/css/tailwind.css'
  // import { createClient } from '@supabase/supabase-js'
  // const supabase = createClient(
  //   'https://vbxsosiulaeihtdkhkjh.supabase.co',
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZieHNvc2l1bGFlaWh0ZGtoa2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NjE0MTgsImV4cCI6MjAxMjUzNzQxOH0.Kf_X1HLwb3JPeeM2h1QIs7-mn6BCkLBcMaI7Q60wIrs',
  // )
  // const countries = ref([])

  // async function getCountries() {
  //   const { data } = await supabase.from('countries').select()
  //   countries.value = data
  // }

  // onMounted(() => {
  //   getCountries()
  // })
</script>
<template>
  <div>
    <!-- <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul> -->
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
  // @use '~/assets/vuetify/settings';
  // .my-button {
  //   height: settings.$button-height;
  // }
</style>
