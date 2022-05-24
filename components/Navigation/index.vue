<script setup lang="ts">
import { useUIStore } from "~~/store/ui";

const UIStore = useUIStore();
</script>
<template>
  <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center">
      <span class="text-2xl cursor-pointer">
        <img
          class="h-10 inline"
          src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
        />
        League Teams
      </span>
    </div>

    <ul
      class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
    >
      <NavigationItem
        title="ROOMS"
        route="/"
        :is-active="UIStore.isActive('/')"
      />
      <NavigationItem
        title="PROFILE"
        route="/profile"
        :is-active="UIStore.isActive('/services')"
      />
      <button
        class="bg-cyan-400 text-xl text-white duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded"
      >
        Login
      </button>
    </ul>
  </nav>
</template>
