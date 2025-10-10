<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  news: News;
  border: boolean;
  idx?: number;
}>();
</script>

<template>
  <div
    :class="[
      'bg-white dark:bg-darkbg dark:text-white border-b-2 sm:border-0 border-gray500 dark:border-gray-500/20  ring ring-gray-200  hover:shadow-lg transition-all ',
    ]"
  >
    <NuxtLink
      :to="$localePath(`/news-details/${news.slug}`)"
      :class="['aspect-16/9  overflow-hidden  block relative']"
    >
      <NuxtImg :src="`${useUrl()}/${news.img}`" alt="" class="img" />
    </NuxtLink>
    <div class="flex-1 p-2 flex flex-col gap-2">
      <div class="mt-auto text-xs text-gray-600 dark:text-gray-400">
        {{ useformatDate2()(news.date) }}
      </div>
      <NuxtLink
        :to="$localePath(`/news-details/${news.slug}`)"
        class="line-clamp-2"
      >
        {{ news.title }}
      </NuxtLink>
    </div>
  </div>
</template>
