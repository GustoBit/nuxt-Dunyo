<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

useHead(() => {
  const key = typeof route.meta?.title === "string" ? route.meta.title : "";

  return {
    title: `Dunyo | ${key ? t(key) : ""}`,
  };
});
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <UiNav />
    <main class="max-md:pt-2" id="main-content">
      <slot />
    </main>
    <Footer />
  </div>
</template>
