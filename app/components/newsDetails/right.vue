<script setup lang="ts">
import type { News } from "~/interface/interface";
import TitleNews from "../ui/title-news.vue";
defineProps<{
  others: News[];
  mostViewed: News[];
}>();
</script>

<template>
  <div class="space-y-4 pt-2">
    <h1 class="semibold leading-tight text-xl lg:text-2xl">
      {{ $t("latestNews") }}
    </h1>

    <div class="widget">
      <TitleNews
        v-for="item in others?.filter((i) => i.title) ||
        mostViewed?.filter((i) => i.title)"
        :key="item._id"
        :item
      />

      <!-- <UiPosterNews
          v-for="item in actual.slice(1, 2)"
          :key="item._id"
          :news="item"
          :border="false"
        /> -->
    </div>
  </div>
</template>
