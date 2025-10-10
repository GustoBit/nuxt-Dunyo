<script setup lang="ts">
import type { Categories, News } from "~/interface/interface";
import { useCategoryStore } from "~/store/data/category";
const store = useCategoryStore();

const data = ref<{
  category: Categories;
  news: News[];
}>();
const { locale } = useI18n();
const getData = async () => {
  data.value = await store.returnCategorySlug("daty", 4);
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
    <div class="space-y-4">
      <div v-for="news in data?.news.slice(0, 3)" :key="news._id">
        <NuxtLink
          :to="$localePath(`/news-details/${news.slug}`)"
          class="right-title hover:shadow-lg transition-all"
        >
          <NuxtImg
            :src="`${useUrl()}/${news.img}`"
            alt=""
            class="shadow w-full"
          />
        </NuxtLink>
      </div>
    </div>
    <ui-custom-ads height="320px" />
  </div>
</template>

<style scoped></style>
