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

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="my-4 hidden xl:block">
    <div
      class="container bg-white dark:bg-darkbg ring ring-white dark:ring-gray-700"
    >
      <div class="flex items-center justify-between p-4 py-3">
        <NuxtLink
          v-for="(item, index) in hasSub"
          :key="item._id"
          :to="$localePath(`/category/${item.slug}`)"
          class="relative inline-block group text-gray700 dark:text-gray-100 hover:text-blue800 dark:hover:text-white800 font-medium"
        >
          <p class="regular">
            {{ item.title }}
          </p>

          <div
            :class="[
              'absolute z-10 top-full transform w-screen max-w-sm pt-2 transition duration-150 ease-in-out translate-y-1 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0',
              index === 0
                ? 'left-0'
                : index === hasSub.length - 1
                  ? 'right-0'
                  : 'left-1/2 -translate-x-1/2',
            ]"
          >
            <div
              class="bg-gray-100 dark:bg-gray-700 shadow rounded-lg p-2 cursor-default"
            >
              <NuxtLink
                v-for="l in item.subs"
                :key="l._id"
                :to="$localePath(`/category/${l.slug}`)"
                class="block rounded-lg px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-500/20"
              >
                <p
                  class="regular text-black800 dark:text-white800 hover:text-blue800 dark:hover:text-white800"
                >
                  {{ l.title }}
                </p>
              </NuxtLink>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
