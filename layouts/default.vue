<template>
  <div class="flex flex-col min-h-screen">
    <HeaderPage />
    <main class="flex-grow">
      <slot />
    </main>
    <FooterPage />
  </div>
</template>

<script setup lang="ts">
import HeaderPage from "~/components/HeaderPage.vue";
import FooterPage from "~/components/FooterPage.vue";
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}

.open-sans {
  font-family: "Open Sans", sans-serif;
}
</style>
