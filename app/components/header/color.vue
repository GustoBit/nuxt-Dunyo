<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="
        isDark
          ? 'line-md:sunny-filled-loop-to-moon-filled-loop-transition'
          : 'line-md:sunny-filled-loop'
      "
      color="neutral"
      variant="ghost"
      class="cursor-pointer flex items-center justify-center w-10 h-10 border-gray-300 dark:border-gray-500/20 xl:dark:hover:bg-gray-500/20 xl:dark:hover:border-gray-500/20 rounded-lg p-1 xl:hover:bg-gray-200 xl:hover:border-gray-200 active:bg-gray-200 active:border-gray-200 dark:active:bg-gray-500/20 dark:active:border-gray-500/20"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
