<script setup lang="ts">
import { useLanguageStore } from "~/store/data/language";
import { useMainStore } from "~/store/data/main";
import { useTabsStore } from "~/store/data/tabs";
import { useVideoStore } from "~/store/data/video";
import { useGalleryStore } from "~/store/data/gallery";
const galleryStore = useGalleryStore();

const { locale } = useI18n();

const videoStore = useVideoStore();
const { video } = storeToRefs(videoStore);

const tabsStore = useTabsStore();
const { important, latest, popular } = storeToRefs(tabsStore);

const mainStore = useMainStore();
const { data, slider } = storeToRefs(mainStore);

const languageStore = useLanguageStore();
const loading = useLoading();

const getData = async () => {
  loading.start();
  await mainStore.getActual();
  await mainStore.getLatest();
  await mainStore.getMain();
  await languageStore.language();
  await tabsStore.get();
  await videoStore.get();
  await galleryStore.get();
  await mainStore.getSliderNews();
  loading.finish();
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
  <div class="container">
    
    <HomeHero :main="data.main" :latest="data.latest" :actual="data.actual" />
    <UiNews
      :data="popular.data"
      :title="popular.title"
      :slug="popular.slug"
      :data2="slider || []"
      :title2="popular.title"
      :slug2="popular.slug"
      :from="2"
      :to="5"
      :from2="5"
      :to2="8"
      clas="mb-[72px]"
    />
    <HomeVideo :data="video" />
    <UiAds :style="`mb-14 h-[180px] lg:h-[263px]`" position-btn="26" />
    <div class="mb72">
      <UiLatest
        :data="latest.data"
        :title="latest.title"
        :slug="latest.slug"
        :from="0"
        :to="4"
      />
    </div>
    <HomeMustRead
      :data="important.data"
      :title="important.title || '123'"
      :slug="important.slug"
    />
    <UiNews
      :data2="slider || []"
      :data="popular.data"
      :title="popular.title"
      :title2="popular.title"
      :slug="popular.slug"
      :slug2="popular.slug"
      :from="2"
      :to="4"
      :from2="4"
      :to2="6"
    />
  </div>
</template>
