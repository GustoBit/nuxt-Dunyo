<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  item: News;
}>();
</script>
<template>
  <div class="space-y-2 py-4">
    <NuxtLink
      :to="$localePath(`/news-details/${item.slug}`)"
      class="right-title"
    >
      {{ item.title }}
    </NuxtLink>
    <div class="medium text-xs text-gray-500 dark:text-gray-200">
      {{ useformatDate2()(item.date) }}
    </div>
    <div
      v-if="item.category.title"
      class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
    >
      #{{ item.category.title }}
    </div>
  </div>
</template>

<style scoped></style>
