<script setup lang="ts">
const route = useRoute();

const showNavigation = (): boolean =>
  route.fullPath.includes("/login") || route.fullPath.includes("/register")
    ? false
    : true;
</script>
<template>
  <Navigation v-if="showNavigation()" />
  <NuxtPage />
</template>
