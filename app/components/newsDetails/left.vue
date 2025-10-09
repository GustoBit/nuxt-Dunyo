<script setup lang="ts">
import type { News, NewsCategory } from "~/interface/interface";
import TitleNews from "../ui/title-news.vue";
defineProps<{
  news: News;
  category: NewsCategory;
  others: News[];
}>();
</script>

<template>
  <div class="space-y-2 xl:space-y-8">
    <h1
      class="text-lg lg:text-3xl xl:text-3xl font-semibold max-w-[1000px] mx-auto leading-9"
    >
      {{ news.title }}
      <div
        class="flex items-center gap-4 text-gray600 dark:text-gray100 text-base mt-2"
      >
        <div>
          {{ useformatDate2()(news.date) }}
        </div>
        <div class="flex items-center gap-2">
          <Icon name="simple-line-icons:eye" class="size-5" />
          {{ news.views }}
        </div>
      </div>
    </h1>
    <NuxtImg :src="`${useUrl()}/${news.img}`" alt="" class="img shadow" />

    <div class="space-y-[26px]">
      <div class="flex max-md:flex-col gap-4 items-start">
        <div
          class="w-[40px] sticky max-md:relative max-md:top-0 max-md:hidden top-20 flex flex-col items-center space-y-4"
        >
          <UiSocial :vertical="true" />
        </div>
        <div
          class="flex-1 bg-white dark:bg-darkbg dark:text-white shadow space-y-6 p-4 dark:ring dark:ring-inset dark:ring-gray-500/20"
        >
          <div
            class="article__box"
            v-html="news.content?.replace(/<p>\s*<br>\s*<\/p>/gi, '')"
          />

          <div>
            <div class="text-brand dark:text-white">
              {{ $t("others") }}
            </div>
            <div class="divide-y divide-gray-200 dark:divide-gray-700">
              <TitleNews
                v-for="item in others.slice(0, 5)"
                :key="item._id"
                :item
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
