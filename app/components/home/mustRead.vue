<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  data: News[];
  title: string;
  slug: string;
}>();

const mustReadAds = ref<HTMLElement | null>(null);
const displayWidth = ref<string | number | undefined>();
const displayHeight = ref<string | number | undefined>();
const isMounted = ref(false); // Флаг для проверки, смонтирован ли компонент

onMounted(() => {
  isMounted.value = true; // Устанавливаем флаг после монтирования
  if (mustReadAds.value) {
    displayWidth.value = mustReadAds?.value.offsetWidth;
    displayHeight.value = mustReadAds?.value.offsetHeight;
    console.log(mustReadAds?.value.offsetHeight);
  }
});
</script>

<template>
  <div class="space-y-[26px] mb72">
    <div class="flex items-center justify-between gap-2">
      <h1 class="semibold text-xl sm:text-3xl lg:text-3xl">
        {{ $t("mustRead") }}
      </h1>

      <!-- <NuxtLink :to="$localePath('/')" class="medium see max-md:hidden">
        {{ $t("seeAll") }}
      </NuxtLink> -->
    </div>

    <div class="grid grid-cols-12 gap-[26px]">
      <div
        class="lg:gap-[27px] xl:block xl:space-y-4 xl:!divide-y-2 divide-gray500 xl:max-h-[631px] xl:overflow-y-auto widget !py-2 overflow-hidden col-span-3 max-md:col-span-12"
      >
        <div
          v-for="item in data.slice(0, 5)"
          :key="item._id"
          class="pb-2 space-y-2"
        >
          <NuxtLink
            :to="$localePath(`/news-details/${item.slug}`)"
            class="line-clamp-2 font-semibold"
          >
            {{ item.title }}
          </NuxtLink>
          <div class="flex items-center justify-between">
            <div class="medium date">{{ useformatDate2()(item.date) }}</div>
            <div
              class="select-none text-blue700 dark:text-blue600 light text-sm"
            >
              {{ item.category.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-6 max-md:col-span-12">
        <div
          v-for="item in data.slice(5, 6)"
          :key="item._id"
          class="h-[320px] sm:h-[420px] lg:h-[516px] overflow-hidden relative"
        >
          <NuxtImg :src="`${useUrl()}/${item.img}`" alt="" class="img" />
          <div class="gradient">
            <div class="text-white500 medium text-lg">
              {{ useformatDate2()(item.date) }}
            </div>
            <NuxtLink
              :to="$localePath(`/news-details/${item.slug}`)"
              class="text-white800 medium text-2xl lg:text-[24px] line-clamp-2 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300 font-semibold"
            >
              {{ item.title }}
            </NuxtLink>
            <div class="text-white400 light text-lg hidden sm:block">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 max-md:col-span-12">
        <div
          ref="mustReadAds"
          :class="[
            'bg-brand flex items-center justify-center text-white h-full w-full',
          ]"
        >
          <span v-if="isMounted"
            >{{ displayWidth }}px x {{ displayHeight }}px
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
