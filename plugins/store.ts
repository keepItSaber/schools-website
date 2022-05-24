import { useAuthStore } from "~~/store/auth";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    const { $db } = useNuxtApp();

    const authStore = useAuthStore();
    // init stores with firebase data
    authStore.initStore($db);
  });
});
