<script setup lang="ts">
import { useUIStore } from "~~/store/ui";

interface NavigationItemProps {
  title: string;
  route: string;
  isActive: boolean;
}

const props = withDefaults(defineProps<NavigationItemProps>(), {
  isActive: false,
});

const store = useUIStore();

const changeCurrentRoute = () => {
  store.changeActiveRouteIndex(props.route);
};
</script>
<template>
  <li class="mx-4 my-6 md:my-0">
    <NuxtLink
      @click="changeCurrentRoute"
      :to="route"
      class="text-xl hover:text-cyan-500 duration-500"
      :class="{ 'text-cyan-500': isActive }"
    >
      {{ title }}
    </NuxtLink>
  </li>
</template>
