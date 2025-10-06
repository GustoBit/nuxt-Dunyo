<script setup lang="ts">
import type { News } from "~/interface/interface";
import SimpleCard from "./simple-card.vue";

defineProps<{
  data: News[];
  title: string;
  slug: string;
}>();
</script>

<template>
  <div class="space-y-4 lg:space-y-[26px]">
    <h1 class="semibold text-xl sm:text-3xl lg:text-3xl">
      {{ title }}
    </h1>
    <!-- 
      <NuxtLink :to="$localePath('/')" class="medium see">
        {{ $t("seeAll") }}
      </NuxtLink> -->

    <div
      v-if="!useAds()"
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]"
    >
      <SimpleCard
        v-for="item in data.slice(0, 4)"
        :key="item._id"
        :news="item"
        :border="false"
      />
    </div>

    <div
      v-if="useAds()"
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]"
    >
      <SimpleCard
        v-for="item in data.slice(0, 4)"
        :key="item._id"
        :news="item"
        :idx="0"
        :border="false"
      />
      <!-- <UiAds :style="`h-[240px] sm:h-full`" position-btn="16" />
      <UiPosterNews
        v-for="item in data.slice(3, 4)"
        :key="item._id"
        :news="item"
        :border="false"
      /> -->
    </div>
  </div>
</template>
