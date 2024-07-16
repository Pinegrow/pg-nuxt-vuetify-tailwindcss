<script setup lang="ts">
  const { isMobileMenuOpen } = useMobileMenu()
</script>
<template>
  <div class="px-4">
    <nav class="h-full navbar-grid py-4">
      <div style="grid-area: logo" class="flex justify-center">
        <TheLogo />
      </div>
      <div
        data-pg-name="Hamburger"
        style="grid-area: hamburger"
        class="md:hidden"
      >
        <NavHamburger @click="isMobileMenuOpen = true" />
      </div>
      <div
        data-pg-name="NavPrimary"
        style="grid-area: primary-nav"
        class="hidden md:flex"
      >
        <NavPrimary class="md:w-full" />
      </div>
      <div
        data-pg-name="Searchbox"
        style="grid-area: search"
        class="flex items-center"
      >
        <v-form class="w-full">
          <v-text-field
            label="Search..."
            append-inner-icon="i-material-symbols-search-rounded"
            hide-details
            variant="outlined"
            class="w-full"
          />
        </v-form>
      </div>
      <div
        data-pg-name="Profile"
        class="flex justify-end space-x-2 md:items-center"
      >
        <ProfileActions class="hidden md:flex" />
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              text="Click me"
              :icon="true"
              v-bind="props"
              variant="tonal"
              class="md:ml-2"
              aria-label="Avatar"
            >
              <v-avatar
                alt="Avatar"
                image="https://avatars.githubusercontent.com/u/73772701?v=4"
                size="large"
              />
            </v-btn>
          </template>
          <v-card min-width="300">
            <v-list>
              <v-list-item>
                <div class="flex flex-col items-center my-1 space-x-1 w-full">
                  <ProfileActions class="flex md:hidden" />
                  <v-btn class="font-bold my-4 w-fit md:my-2"
                    >Sign In / Join Us</v-btn
                  >
                </div>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-list>
              <NavSecondary />
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </nav>
    <div class="w-80">
      <v-navigation-drawer
        v-model="isMobileMenuOpen"
        name="drawer"
        data-pg-name="NavSecondary"
        style="grid-area: primary-nav"
        class="md:hidden"
        location="left"
        temporary
      >
        <NavPrimary class="m-4" />
      </v-navigation-drawer>
    </div>
  </div>
</template>
<style scoped>
  .navbar-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'hamburger logo profile' 'search search search';
    gap: 20px;
  }
  @media (min-width: 768px) {
    .navbar-grid {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;
      grid-template-areas: 'logo search profile' 'primary-nav primary-nav primary-nav';
      gap: 20px;
    }
  }
  @media (min-width: 1280px) {
    .navbar-grid {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto;
      grid-template-areas: 'logo primary-nav search profile';
    }
  }
</style>
