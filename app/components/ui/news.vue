<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  data: News[];
  title: string;
  slug: string;
}>();
</script>

<template>
  <div class="space-y-4 mb-16">
    <!-- TITLE -->
    <NuxtLink
      :to="$localePath(`/category/${slug}`)"
      class="flex items-center gap-3 w-fit"
    >
      <h1 class="semibold text-xl lg:text-2xl xl:text-[32px] flex-1">
        {{ $t(`${title}`) }}
      </h1>
      <UIcon
        name="heroicons:arrow-long-right-16-solid"
        class="!w-8 !h-8 text-[#141E2D] dark:text-white900"
      />
    </NuxtLink>

    <!-- DATA -->
    <div class="">
      <div class="grid grid-flow-col grid-rows-3 gap-[26px] grid-cols-2">
        <UiPosterNews
          v-for="(item, idx) in data.slice(0, 4) || new Array(4)"
          :key="item._id"
          :news="item"
          :border="true"
          :idx
        />
      </div>
    </div>
  </div>
</template>
