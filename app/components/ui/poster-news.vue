<template>
  <div
    class="pb-4 lg:pb-[26px] space-y-2 lg:space-y-4 border-b-2 border-gray500 dark:border-gray-500/20"
  >
    <div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
      <img :src="`${useUrl()}/${news.img}`" alt="" class="img" />
    </div>
    <div class="date medium">
      {{ formatDate2(new Date(news.date)) }}
    </div>
    <NuxtLink
      :to="$localePath(`/news-details/${news.slug}`)"
      class="medium title"
    >
      {{ news.title }}
    </NuxtLink>
    <div class="flex items-center gap-4">
      <NuxtLink
        :to="$localePath(`/category/${news.category.slug}`)"
        class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
      >
        #{{ news.category.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  news: News;
  slug: string;
  clas?: string;
}>();
</script>

<style scoped></style>
