<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import type { News } from "~/interface/interface";

const btnToggle = ref<string>("latest");

defineProps<{
  main: News[];
  latest: News[];
  actual: News[];
}>();

const btns = computed(() => [
  { title: $t("latestNews"), value: "latest" },
  { title: $t("actualNews"), value: "actual" },
]);
</script>

<template>
  <div class="grid grid-cols-12 gap-[27px] mb-[72px] max-md:mb-10">
    <div
      class="aspect-16/9 col-span-9 max-md:col-span-12 overflow-hidden relative xl:order-none"
    >
      <Swiper
        :style="{
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
        }"
        :modules="[Pagination, Autoplay, EffectFade]"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        effect="fade"
        :speed="1000"
        :loop="main.length > 1"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true, dynamicBullets: true }"
        class="w-full h-full"
      >
        <SwiperSlide v-for="item in main.slice(0, 3)" :key="item._id">
          <NuxtImg :src="`${useUrl()}/${item.img}`" alt="" class="img" />

          <div class="gradient">
            <div class="text-white max-md:text-xs">
              {{ useformatDate2()(item.date) }}
            </div>
            <NuxtLink
              :to="$localePath(`/news-details/${item.slug}`)"
              class="text-white font-medium text-2xl lg:text-[26px] max-md:line-clamp-2 max-md:text-sm line-clamp-3 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300 leading-7"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div
      class="flex flex-col col-span-3 max-md:col-span-12 lg:gap-4 content-start"
    >
      <div class="flex items-center">
        <button
          v-for="item in btns"
          :key="item.value"
          :class="[
            'text-sm ring ring-inset flex-1 text-center  p-1 py-1.5',
            btnToggle === item.value
              ? 'ring-brand bg-brand text-white'
              : 'ring-gray-300',
          ]"
          @click="btnToggle = item.value"
        >
          {{ item.title }}
        </button>
      </div>
      <div
        class="xl:block xl:!divide-y-2 divide-gray500 xl:max-h-[567px] xl:overflow-y-auto widget !py-2 overflow-hidden flex-1"
      >
        <div
          v-for="item in btnToggle == 'latest' ? latest : actual"
          :key="item._id"
          class="space-y-2 py-3 border-b-2 xl:border-b-0 border-gray500 dark:border-gray-500/20"
        >
          <NuxtLink
            :to="$localePath(`/news-details/${item.slug}`)"
            class="right-title"
          >
            {{ item.title }}
          </NuxtLink>

          <div class="flex items-center justify-between flex-wrap">
            <div class="text-xs text-gray-500 dark:text-gray-200">
              {{ useformatDate2()(item.date) }}
            </div>
            <div
              class="select-none text-blue700 dark:text-blue-200 light text-xs"
            >
              {{ item.category.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
@import "swiper/css";
@import "swiper/css/scrollbar";
@import "swiper/css/pagination";
@import "swiper/css/effect-fade";
</style>
