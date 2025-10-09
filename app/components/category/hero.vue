<script setup lang="ts">
import type { Category, News } from "~/interface/interface";
import TitleNews from "../ui/title-news.vue";

// const date = ref('')

defineProps<{
  main: News;
  categoryNews?: News[];
  parentCategory?: Category;
}>();
</script>

<template>
  <div class="space-y-4 lg:space-y-8 mb-10">
    <div class="flex justify-between flex-col lg:flex-row gap-4">
      <h1 class="semibold text-2xl flex-1 lg:text-3xl xl:text-4xl">
        {{ parentCategory?.title }}
      </h1>

      <!-- <div class="self-end lg:self-auto">
				<UiDatePicker v-model="date" />
			</div> -->
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-[1fr_316px] gap-[27px]">
      <div class="aspect-16/9 overflow-hidden relative">
        <NuxtImg
          v-if="main?.img"
          :src="`${useUrl()}/${main?.img}`"
          alt=""
          class="img"
        />

        <div class="gradient">
          <div v-if="main?.date" class="text-white500 medium text-lg">
            {{ useformatDate2()(main.date) }}
          </div>
          <NuxtLink
            :to="$localePath(`/news-details/${main?.slug || 'de'}`)"
            class="text-white800 medium text-2xl lg:text-[32px] line-clamp-2 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
          >
            {{ main?.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="widget">
        <TitleNews v-for="item in categoryNews" :key="item._id" :item />
      </div>
    </div>
  </div>
</template>
