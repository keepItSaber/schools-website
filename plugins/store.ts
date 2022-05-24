export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:beforeMount", () => {
    const { $db } = useNuxtApp();

    // init stores with firebase data
  });
});
