<script setup lang="ts">
import type { News, NewsCategory } from "~/interface/interface";
defineProps<{
  news: News;
  category: NewsCategory;
}>();
</script>

<template>
  <div class="space-y-2 xl:space-y-8">
    <!-- <div
      class="h-[320px] sm:h-[480px] lg:h-[520px] xl:h-[621px] overflow-hidden rounded-2xl"
    >
      <NuxtImg :src="`${useUrl()}/${news.img}`" alt="" class="img" />
    </div> -->
    <h1
      class="text-lg lg:text-3xl xl:text-4xl font-light max-w-[1000px] mx-auto"
    >
      {{ news.title }}
      <div class="text-gray600 dark:text-gray100 text-base mt-2">
        {{ useformatDate2()(news.date) }}
      </div>
    </h1>

    <div class="space-y-[26px]">
      <div class="flex max-md:flex-col gap-4 items-start">
        <div
          class="w-[60px] sticky max-md:relative max-md:top-0 max-md:hidden top-20 flex flex-col items-center space-y-4"
        >
          <a href="#" class="share">
            <Icon name="line-md:facebook" class="size-4" />
          </a>
          <a href="#" class="share">
            <Icon name="line-md:instagram" class="size-4" />
          </a>
          <a href="#" class="share">
            <Icon name="line-md:telegram" class="size-4" />
          </a>
        </div>
        <div
          class="article__box flex-1 bg-white dark:bg-gray-700 dark:text-white"
          v-html="news.content?.replace(/<p>\s*<br>\s*<\/p>/gi, '')"
        />
      </div>
    </div>
  </div>
</template>
