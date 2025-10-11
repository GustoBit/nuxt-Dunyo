<script setup lang="ts">
import type { Categories, News } from "~/interface/interface";
import { useCategoryStore } from "~/store/data/category";
const store = useCategoryStore();

const props = defineProps<{
  slug: string;
  count: number;
  showTitle?: boolean;
  calendarHide?: boolean;
}>();

const data = ref<{
  category: Categories;
  news: News[];
}>();
const { locale } = useI18n();
const getData = async () => {
  data.value = await store.returnCategorySlug(props.slug, 4);
};

watch(locale, () => {
  getData();
});

onMounted(() => {
  getData();
});
</script>
<template>
  <div class="space-y-5 pt-2">
    <div class="semibold leading-tight text-xl lg:text-2xl">
      {{ data?.category.title }}
    </div>
    <div>
      <div
        v-for="news in data?.news.slice(0, 1)"
        :key="news._id"
        class="border-b border-gray-200 dark:border-gray-500/20"
      >
        <NuxtLink
          :to="$localePath(`/news-details/${news.slug}`)"
          class="transition-all shadow relative"
        >
          <div
            v-if="showTitle"
            class="absolute flex p-2 w-full bottom-0 bg-black/30 text-white items-end"
          >
            {{ news.title }}
          </div>
          <NuxtImg
            :src="`${useUrl()}/${news.img}`"
            alt=""
            class="shadow w-full"
          />
        </NuxtLink>
      </div>
      <div
        class="dark:text-white divide-y divide-gray-200 shadow ring ring-gray-200 dark:ring-gray-500/20 p-2 py-1 bg-white dark:bg-darkbg"
      >
        <div
          v-for="news in data?.news.slice(1, count)"
          :key="news._id"
          class="py-1.5"
        >
          <NuxtLink
            :to="$localePath(`/news-details/${news.slug}`)"
            :class="[
              ' hover:text-brand transition-all    text-gray-700 dark:text-gray-300 flex gap-1 text-sm',
            ]"
          >
            <Icon
              v-if="!calendarHide"
              name="line-md:calendar"
              class="size-4 mt-1"
            />
            {{ news.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- <ui-custom-ads height="320px" /> -->
  </div>
</template>

<style scoped></style>
