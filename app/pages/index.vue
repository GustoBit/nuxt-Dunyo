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
const { important, latest } = storeToRefs(tabsStore);

const mainStore = useMainStore();
const { data } = storeToRefs(mainStore);

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
  <section>
    <div class="container">
      <HomeHero
        :main="data.main"
        :latest="data.latest?.slice(0, 5)"
        :actual="data.actual?.slice(0, 5)"
      />
      <UiNews
        :data="important.data"
        :title="important.title"
        :slug="important.slug"
      />
      <UiNews :data="latest.data" :title="latest.title" :slug="latest.slug" />
    </div>
    <HomeVideo :data="video" />
    <div class="container">
      <UiAds
        :style="`mb-14 h-[180px] lg:h-[263px] relative`"
        position-btn="26"
      />
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
    </div>
  </section>
</template>
