<script setup lang="ts">
import { useAuthStore } from "~~/store/auth";
const store = useAuthStore();
</script>

<template>
  <div class="grid grid-cols-10 gap-2">
    <div class="col-start-1 col-end-11 h-96 ...">
      <img
        class="object-cover w-full h-full"
        src="~~/assets/images/profile_bg.jpg"
      />
    </div>
  </div>

  <section>
    <div class="relative">
      <div class="grid grid-cols-4">
        <div class="mx-5 my-4 bg-white shadow-xl rounded-xl">
          <div class="grid grid-cols-4">
            <div
              class="col-start-1 col-end-2 square flex items-center justify-center ..."
            >
              <img
                class="w-24 h-24"
                src="~~/assets/images/profile/testUser_bg.png"
              />
            </div>
            <div
              class="col-start-2 col-end-3 flex items-center justify-center ..."
            >
              Smejkyy <br />
              EUNE
            </div>

            <div
              class="col-start-3 col-end-4 square flex items-center justify-center ..."
            >
              <img class="w-32 h-32" src="~~/assets/images/ranks/9.png" />
            </div>
            <div
              class="col-start-4 col-end-5 flex items-center justify-center ..."
            >
              Challenger<br />
              6969LP
            </div>
            <div
              class="col-start-1 col-end-5 flex items-center justify-center ..."
            >
              Graph XDXDXD
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
