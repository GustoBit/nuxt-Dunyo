<script setup lang="ts">
import type {
  Category,
  CategoryNews,
  MainNews,
  News,
  ParentCategory,
} from "~/interface/interface";

// const date = ref('')

defineProps<{
  main: News;
  categoryNews?: News[];
  parentCategory?: Category;
}>();
</script>

<template>
  <div class="space-y-4 lg:space-y-8 mb72">
    <div class="flex justify-between flex-col lg:flex-row gap-4">
      <h1 class="semibold text-3xl flex-1 lg:text-4xl xl:text-5xl">
        {{ parentCategory?.title }}
      </h1>

      <!-- <div class="self-end lg:self-auto">
				<UiDatePicker v-model="date" />
			</div> -->
    </div>

    <div class="grid xl:grid-cols-[1fr_316px] gap-[27px]">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_318px] gap-[27px]"
      >
        <div
          class="h-[380px] lg:h-[444px] xl:h-[621px] overflow-hidden rounded-xl relative"
        >
          <NuxtImg
            v-if="main?.img"
            :src="`${useUrl()}/${main?.img}`"
            alt=""
            class="img"
          />

          <div class="gradient rounded-b-xl">
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

        <div
          v-for="item in categoryNews?.slice(0, 1)"
          :key="item._id"
          class="space-y-2 lg:space-y-4"
        >
          <div
            class="h-[240px] lg:h-[280px] xl:h-[467px] rounded-xl overflow-hidden"
          >
            <NuxtImg
              v-if="item.img"
              :src="`${useUrl()}/${item.img}`"
              alt=""
              class="img"
            />
          </div>
          <div class="medium date">{{ useFormatDate()(item?.date) }}</div>
          <NuxtLink
            :to="$localePath(`/news-details/${item?.slug || 'de'}`)"
            class="medium title"
          >
            {{ item?.title }}
          </NuxtLink>

          <div
            class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
          >
            #{{ item?.category?.slug }}
          </div>
        </div>
      </div>

      <div
        class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[27px] xl:block xl:space-y-4 xl:!divide-y-2 divide-gray500 xl:max-h-[631px] xl:overflow-y-auto"
      >
        <div
          v-for="item in categoryNews?.slice(1)"
          :key="item._id"
          class="space-y-2 pb-2 border-b-2 xl:border-b-0 border-gray500 dark:border-gray-500/20"
        >
          <div class="medium date">{{ useformatDate2()(item?.date) }}</div>
          <NuxtLink
            :to="$localePath(`/news-details/${item?.slug}`)"
            class="medium title"
          >
            {{ item?.title }}
          </NuxtLink>
          <div
            class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
          >
            #{{ item?.category.slug }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
