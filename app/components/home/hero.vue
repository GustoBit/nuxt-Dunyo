<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import type { News } from "~/interface/interface";

defineProps<{
  main: News[];
  latest: News[];
  actual: News[];
}>();
</script>

<template>
  <div class="grid grid-cols-12 gap-[27px] mb72">
    <div
      class="aspect-16/9 col-span-9 max-md:col-span-12 overflow-hidden rounded-xl relative xl:order-none"
    >
      <Swiper
        :style="{
          '--swiper-pagination-color': '#fff',
          '--swiper-pagination-bullet-inactive-color': '#fff',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
        }"
        :modules="[Pagination, Autoplay, EffectFade]"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        effect="fade"
        :speed="800"
        :loop="main.length > 1"
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true, dynamicBullets: true }"
        class="w-full h-full"
      >
        <SwiperSlide v-for="item in main" :key="item._id">
          <NuxtImg
            :src="`${useUrl()}/${item.img}`"
            alt=""
            class="img rounded-xl"
          />

          <div class="gradient rounded-b-xl">
            <div class="text-white">
              {{ useformatDate2()(item.date) }}
            </div>
            <NuxtLink
              :to="$localePath(`/news-details/${item.slug}`)"
              class="text-white font-light text-2xl lg:text-[26px] line-clamp-3 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div
      class="lg:grid col-span-3 max-md:col-span-12 lg:gap-[27px] xl:block xl:!divide-y-2 divide-gray500 xl:max-h-[567px] xl:overflow-y-auto widget !py-2 overflow-hidden"
    >
      <div
        v-for="item in latest"
        :key="item._id"
        class="space-y-1 py-2 border-b-2 xl:border-b-0 border-gray500 dark:border-gray-500/20"
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
</template>

<style lang="css">
@import "swiper/css";
@import "swiper/css/scrollbar";
@import "swiper/css/pagination";
@import "swiper/css/effect-fade";
</style>
