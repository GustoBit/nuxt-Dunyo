<script setup lang="ts">
import { useLanguageStore } from "~/store/data/language";
import { useMainStore } from "~/store/data/main";
import { useTabsStore } from "~/store/data/tabs";
import { useVideoStore } from "~/store/data/video";
import { useGalleryStore } from "~/store/data/gallery";
import { useCategoryStore } from "~/store/data/category";
import type { Categories, News } from "~/interface/interface";
const galleryStore = useGalleryStore();
const categoryStore = useCategoryStore();

const { locale } = useI18n();

const videoStore = useVideoStore();
const { video } = storeToRefs(videoStore);

const tabsStore = useTabsStore();
const { important, latest } = storeToRefs(tabsStore);

const mainStore = useMainStore();
const { data } = storeToRefs(mainStore);

const languageStore = useLanguageStore();

const interviews = ref<{
  category: Categories;
  news: News[];
}>();

const getData = async () => {
  await mainStore.getActual();
  await mainStore.getLatest();
  await mainStore.getMain();
  await languageStore.language();
  await tabsStore.get();
  await videoStore.get();
  await galleryStore.get();
  await mainStore.getSliderNews();
  interviews.value = await categoryStore.returnCategorySlug("Eksklyuziv", 4);
};

watch(locale, () => {
  getData();
});

onMounted(() => {
  getData();
});

definePageMeta({
  title: "home",
});
</script>

<template>
  <section>
    <div class="container">
      <HomeHero
        :main="data.main"
        :latest="data.latest?.slice(0, 5)"
        :actual="data.actual?.slice(0, 5)"
      />
      <div class="grid grid-cols-12 gap-8 content-start pb-10">
        <div class="col-span-9 flex flex-col space-y-8">
          <UiNews
            :data="data.actual"
            :title="$t('actualNews')"
            :slug="important.slug"
          />
          <UiCustomAds />
          <UiNews
            :data="latest.data"
            :title="latest.title"
            :slug="latest.slug"
          />
        </div>
        <div class="col-span-3 max-md:col-span-12">
          <HomeDateNews />
        </div>
      </div>
    </div>
    <HomeVideo :data="video" />
    <div class="container space-y-8">
      <UiCustomAds />
      <UiLatest
        :data="interviews?.news || []"
        :title="interviews?.category?.title || ''"
        :slug="latest.slug"
        :from="0"
        :to="4"
      />

      <HomeMustRead
        :data="important.data"
        :title="important.title || '123'"
        :slug="important.slug"
      />
    </div>
  </section>
</template>
