<script setup lang="ts">
import type { News } from "~/interface/interface";
import { useCategoryStore } from "~/store/data/category";
const categoryStore = useCategoryStore();
const { categoryNews } = storeToRefs(categoryStore);

const route = useRoute();
const { locale } = useI18n();

const slug = ref(route.params?.slug);
watch(
  () => route.params.slug,
  (newVal) => {
    slug.value = newVal;
    // console.log('NewVal', newVal)
    getData();
  }
);

const loading = useLoading();
const getData = async () => {
  loading.start();
  if (typeof slug.value == "string") {
    // await categoryStore.getSecondCats(slug.value);
    await categoryStore.getCategoryNews(slug.value);
    // await categoryStore.getParentCategory(slug.value);
  }
  loading.finish();
};

watch(locale, () => {
  getData();
});

onMounted(() => {
  getData();
});

definePageMeta({
  title: "category",
});
</script>

<template>
  <div class="container">
    <CategoryHero
      :main="categoryNews?.actual as News"
      :category-news="categoryNews?.news?.slice(0, 5)"
      :parent-category="categoryNews?.category"
    />
    <CategoryMiddle :data="categoryNews.news.slice(5) ?? []" />
    <!-- <UiAds :style="`mb-8 h-[180px] lg:h-[263px]`" position-btn="26" /> -->
    <!-- <CategoryLast :data="data.categories[1]?.news ?? []" /> -->
  </div>
</template>
