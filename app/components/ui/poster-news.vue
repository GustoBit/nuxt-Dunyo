<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  news: News;
  border: boolean;
}>();
</script>

<template>
  <div
    class="space-y-2 pb-4 bg-white dark:bg-gray-700 dark:text-white border-b-2 sm:border-0 border-gray500 dark:border-gray-500/20 rounded-2xl ring ring-gray-200 p-1"
  >
    <NuxtLink
      :to="$localePath(`/news-details/${news.slug}`)"
      class="aspect-16/9 overflow-hidden rounded-xl block relative"
    >
      <div class="absolute bottom-2 left-2 text-white">
        {{ useformatDate2()(news.date) }}
      </div>
      <NuxtImg :src="`${useUrl()}/${news.img}`" alt="" class="img" />
    </NuxtLink>
    <div class="flex items-center justify-between px-2">
      <div v-if="news.category?.title" class="flex items-center gap-4">
        <NuxtLink
          :to="$localePath(`/category/${news.category.slug}`)"
          class="select-none text-blue700 dark:text-blue600 text-sm"
        >
          {{ news.category.title }}
        </NuxtLink>
      </div>
    </div>
    <NuxtLink
      :to="$localePath(`/news-details/${news.slug}`)"
      class="medium title px-2"
    >
      {{ news.title }}
    </NuxtLink>
  </div>
</template>
