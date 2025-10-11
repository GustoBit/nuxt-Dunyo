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
      'bg-white dark:bg-darkbg dark:text-white   ring ring-gray-200 dark:ring-gray-500/20 flex col-span-1 hover:shadow-lg transition-all',
      idx === 0 ? 'row-span-4 col-span-2 flex-col' : 'col-span-2 row-span-1',
    ]"
  >
    <NuxtLink
      :to="$localePath(`/news-details/${news.slug}`)"
      :class="[
        'overflow-hidden block relative',
        idx === 0 ? 'w-full aspect-16/9' : 'w-[120px] ',
      ]"
    >
      <div
        v-if="news.category?.title && idx === 0"
        class="flex items-center absolute right-2 top-2 bg-brand p-1 px-2"
      >
        <NuxtLink
          :to="$localePath(`/category/${news.category.slug}`)"
          :class="[
            'text-white text-xs',
            idx === 0 ? 'text-lg max-md:text-sm' : 'text-sm',
          ]"
        >
          {{ news.category.title }}
        </NuxtLink>
      </div>

      <NuxtImg
        :src="`${useUrl()}/${news.img}`"
        alt=""
        :class="[idx === 0 ? 'img' : 'w-full h-full object-cover block']"
      />
    </NuxtLink>
    <div class="flex-1 p-2 flex flex-col gap-2">
      <NuxtLink
        :to="$localePath(`/news-details/${news.slug}`)"
        :class="[
          'hover:text-brand font-semibold',
          idx == 0 ? 'text-xl max-md:text-lg' : 'text-base line-clamp-3',
        ]"
      >
        {{ news.title }}
      </NuxtLink>
      <div
        v-if="idx === 0"
        class="no-img text-sm"
        v-html="news.content?.replace(/<p>\s*<br>\s*<\/p>/gi, '')"
      />
      <div class="mt-auto text-xs text-gray-600 dark:text-gray-400">
        {{ useformatDate2()(news.date) }}
      </div>
    </div>
  </div>
</template>
