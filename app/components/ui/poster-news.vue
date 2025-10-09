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
      'bg-white dark:bg-darkbg dark:text-white   ring ring-gray-200 dark:ring-gray-500/20 flex col-span-1 flex-col',
      idx === 0 ? 'row-span-2 col-span-2 ' : 'col-span-1 row-span-1',
    ]"
  >
    <NuxtLink
      :to="$localePath(`/news-details/${news.slug}`)"
      :class="['aspect-16/9  overflow-hidden  block relative w-full']"
    >
      <NuxtImg :src="`${useUrl()}/${news.img}`" alt="" class="img" />
    </NuxtLink>
    <div class="flex-1 p-2 flex flex-col gap-2">
      <div v-if="news.category?.title" class="flex items-center">
        <NuxtLink
          :to="$localePath(`/category/${news.category.slug}`)"
          :class="[
            'select-none text-blue700 dark:text-blue600',
            idx === 0 ? 'text-lg max-md:text-sm' : 'text-sm',
          ]"
        >
          {{ news.category.title }}
        </NuxtLink>
      </div>
      <NuxtLink
        :to="$localePath(`/news-details/${news.slug}`)"
        :class="[idx == 0 ? 'text-2xl max-md:text-lg' : 'text-lg line-clamp-3']"
      >
        {{ news.title }}
      </NuxtLink>
      <div
        v-if="idx === 0"
        class="no-img max-md:text-sm"
        v-html="news.content?.replace(/<p>\s*<br>\s*<\/p>/gi, '')"
      />
      <div class="mt-auto text-xs text-gray-600 dark:text-gray-400">
        {{ useformatDate2()(news.date) }}
      </div>
    </div>
  </div>
</template>
