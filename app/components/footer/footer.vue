<script setup lang="ts">
import { useCategoryStore } from "~/store/data/category";
const categoryStore = useCategoryStore();
const { hasSub } = storeToRefs(categoryStore);

const loading = useLoading();

const getData = async () => {
  loading.start();
  await categoryStore.get();
  loading.finish();
};

const footerLinks = computed(() => [
  { to: "about", label: $t("about") },
  { to: "privary", label: $t("privacy") },
  { to: "term", label: $t("term") },
  { to: "cookie", label: $t("cookie") },
]);

onMounted(() => {
  getData();
});
</script>

<template>
  <div
    class=" dark:bg-gray-700 pt-14 rounded-t-3xl lg:rounded-t-[50px] mt-14 lg:mt-[72px] bg-[url(/background.svg)] bg-center bg-no-repeat bg-cover"
  >
    <footer class="space-y-8">
      <div class="container space-y-8 pb-8">
        <div class="flex items-center justify-between">
          <NuxtLink :to="$localePath('/')" class="w-[169px] h-[44px] block">
            <NuxtImg
              src="/logo.svg"
              alt="Logo"
              class="dark:brightness-0 dark:invert-100 h-full object-contain"
            />
          </NuxtLink>

          <UiSocial />
        </div>
        <div class="grid grid-cols-1 gap-8 pl-5 sm:pl-0 sm:gap-14">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 flex-1 xl:flex-none order-2 sm:order-none"
          >
            <div
              v-for="value in hasSub.filter((l) => l.slug == 'novosti')"
              :key="value._id"
              class="space-y-4"
            >
              <h1 class="medium text-xl leading-[100%] text-wrap">
                {{ value.title }}
              </h1>
              <div class="space-y-4">
                <NuxtLink
                  v-for="l in value.subs"
                  :key="l._id"
                  class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
                  :to="$localePath(`/category/${l.slug}`)"
                >
                  {{ l.title }}
                </NuxtLink>
              </div>
            </div>
            <div
              v-for="value in hasSub.filter(
                (l) => l.slug == 'mezhdunarodnaya-arena'
              )"
              :key="value._id"
              class="space-y-4"
            >
              <h1 class="medium text-xl leading-[100%] text-wrap">
                {{ value.title }}
              </h1>
              <div class="space-y-4">
                <NuxtLink
                  v-for="l in value.subs"
                  :key="l._id"
                  class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
                  :to="$localePath(`/category/${l.slug}`)"
                >
                  {{ l.title }}
                </NuxtLink>
              </div>
            </div>
            <div
              v-for="value in hasSub.filter((l) => l.slug == 'diplomatiya')"
              :key="value._id"
              class="space-y-4"
            >
              <h1 class="medium text-xl leading-[100%] text-wrap">
                {{ value.title }}
              </h1>
              <div class="space-y-4">
                <NuxtLink
                  v-for="l in value.subs"
                  :key="l._id"
                  class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
                  :to="$localePath(`/category/${l.slug}`)"
                >
                  {{ l.title }}
                </NuxtLink>
              </div>
            </div>
            <div
              v-for="value in hasSub.filter((l) => l.slug == 'ekonomika')"
              :key="value._id"
              class="space-y-4"
            >
              <h1 class="medium text-xl leading-[100%] text-wrap">
                {{ value.title }}
              </h1>
              <div class="space-y-4">
                <NuxtLink
                  v-for="l in value.subs"
                  :key="l._id"
                  class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
                  :to="$localePath(`/category/${l.slug}`)"
                >
                  {{ l.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center space-y-1 bg-brand">
        <div
          class="container flex max-md:flex-col items-center p-4 text-white gap-4"
        >
          <NuxtLink
            v-for="link of footerLinks"
            :key="link.to"
            :to="$localePath(`/${link.to}`)"
            class="text-white hover:underline hover:underline-offset-2"
          >
            {{ link.label }}
          </NuxtLink>
          <div
            class="text-center justify-center gap-4 flex regular leading-[100%]"
          >
            <UIcon name="tabler:copyright" class="w-4 h-4" />
            Copyright 2025. Dunyo
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
