<script setup lang="ts">
import type { Video } from "~/interface/interface";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import YouTube from "vue3-youtube";

const breaking = ref(Array(200).fill("Breaking News"));

const isPlaying = ref<boolean>(false);
const onPlayerStateChange = (event: { data: number }) => {
  if (event?.data === 1) {
    isPlaying.value = true;
  } else {
    isPlaying.value = false;
  }
};

defineProps<{
  data: Video[];
}>();
</script>

<template>
  <ClientOnly>
    <div
      class="px-4 py-10 lg:px-8 relative rounded-[26px] overflow-hidden bg-gradient-to-b from-blue600 to-blue500 mb-[52px]"
    >
      <div class="relative z-10">
        <div
          v-for="item in data.slice(0, 1)"
          :key="item._id"
          class="mb-6 relative mx-auto flex gap-10"
        >
          <div class="relative flex-1">
            <div class="aspect-16/9 mx-auto rounded-xl overflow-hidden">
              <YouTube
                ref="iframe"
                :src="item.link || ''"
                height="100%"
                width="100%"
                class="w-full h-full"
                @state-change="onPlayerStateChange"
              />
            </div>
            <div
              :class="[
                'hidden lg:block gradient rounded-b-xl transform transition duration-300 ease-in-out',
                isPlaying
                  ? 'translate-y-1 opacity-0 pointer-events-none'
                  : 'translate-y-0 opacity-100',
              ]"
            >
              <NuxtLink
                :to="$localePath(`/`)"
                class="text-white800 text-2xl lg:text-2xl line-clamp-2 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
            <NuxtLink
              :to="$localePath('/')"
              class="text-white900 medium text-xl lg:hidden line-clamp-3 xl:hover:text-blue700 active:text-blue700 mt-2 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-[26px] lg:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="item in data.slice(1, 5)"
            :key="item._id"
            class="space-y-2 lg:space-y-4"
          >
            <div class="aspect-16/9 rounded-xl overflow-hidden">
              <iframe
                :src="item?.link"
                width="100%"
                height="100%"
                loading="lazy"
                class="w-full h-full"
                frameborder="0"
                allowfullscreen
              />
            </div>
            <NuxtLink
              :to="$localePath('/')"
              class="text-white900 line-clamp-3 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
            >
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="Swiper absolute z-0 top-0 xl:-top-16 left-0 right-0 select-none pointer-events-none"
      >
        <Swiper
          :modules="[Autoplay]"
          :loop="true"
          :space-between="69"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }"
          :speed="10000"
          :slides-per-view="1"
          :breakpoints="{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
          class="w-full h-full"
        >
          <SwiperSlide
            v-for="(item, index) in breaking"
            :key="index"
            class="!w-fit"
          >
            <div
              class="text-white900/5 semibold text-2xl sm:text-5xl xl:text-[150px] text-nowrap"
            >
              {{ item }}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        class="Swiper absolute z-0 bottom-[240px] lg:bottom-[383px] left-0 right-0 select-none pointer-events-none"
      >
        <Swiper
          :modules="[Autoplay]"
          :loop="true"
          :space-between="69"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }"
          :speed="10000"
          :slides-per-view="1"
          :breakpoints="{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }"
          class="w-full h-full"
        >
          <SwiperSlide
            v-for="(item, index) in breaking"
            :key="index"
            class="!w-fit"
          >
            <div
              class="text-white900/5 semibold text-2xl sm:text-5xl xl:text-[150px] text-nowrap"
            >
              {{ item }}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </ClientOnly>
</template>

<style>
.Swiper .swiper-wrapper {
  transition-timing-function: linear;
}

.mySwiper .swiper-slide {
  width: 25%;
  opacity: 0.6;
}
.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
