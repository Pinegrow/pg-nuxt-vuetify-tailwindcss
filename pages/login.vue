<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    title: 'Login',
  })
  const supabase = useSupabaseClient()
  const { query } = useRoute()
  const user = useSupabaseUser()

  watchEffect(async () => {
    if (user.value) {
      await navigateTo(query.redirectTo as string, {
        replace: true,
      })
    }
  })

  const login = async () => {
    const redirectTo = `${window.location.origin}${query.redirectTo}`
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo },
    })
    if (error) {
      console.error(error)
    }
  }
</script>
<template>
  <div class="lg:flex lg:justify-center">
    <v-btn text="Login" @click="login"></v-btn>
  </div>
</template>
<style scoped></style>
