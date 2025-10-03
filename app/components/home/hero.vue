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
      class="h-[380px] lg:h-[444px] xl:h-[621px] col-span-9 overflow-hidden rounded-xl relative order-1 xl:order-none"
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
            <div class="text-white500 medium text-lg">
              {{ useformatDate2()(item.date) }}
            </div>
            <NuxtLink
              :to="$localePath(`/news-details/${item.slug}`)"
              class="text-white800 medium text-2xl lg:text-[32px] line-clamp-2 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <div
      class="space-y-4 lg:space-y-0 lg:grid col-span-3 lg:gap-[27px] xl:block xl:space-y-4 xl:!divide-y-2 divide-gray500 xl:max-h-[631px] xl:overflow-y-auto"
    >
      <div
        v-for="item in actual"
        :key="item._id"
        class="space-y-1 pb-2 border-b-2 xl:border-b-0 border-gray500 dark:border-gray-500/20"
      >
        <div class="medium date">{{ useformatDate2()(item.date) }}</div>
        <NuxtLink
          :to="$localePath(`/news-details/${item.slug}`)"
          class="medium title"
        >
          {{ item.title }}
        </NuxtLink>
        <div
          class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
        >
          #{{ item.category.title }}
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
