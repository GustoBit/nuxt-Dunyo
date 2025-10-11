<script setup lang="ts">
import type { News } from "~/interface/interface";

defineProps<{
  data: News[];
  title: string;
  slug: string;
}>();
</script>

<template>
  <div class="space-y-4">
    <h1 class="font-bold text-xl lg:text-2xl xl:text-[32px] max-md:text-lg">
      {{ title }}
    </h1>
    <div
      class="grid grid-rows-4 gap-[26px] grid-cols-4 max-md:block max-md:space-y-4"
    >
      <UiPosterNews
        v-for="(item, idx) in data.slice(0, 5) || new Array(4)"
        :key="item._id"
        :news="item"
        :border="true"
        :idx
      />
    </div>
  </div>
</template>
