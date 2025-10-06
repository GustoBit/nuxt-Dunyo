<script setup lang="ts">
import type { News } from "~/interface/interface";
defineProps<{
  others: News[];
  mostViewed: News[];
}>();
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-5">
      <h1 class="semibold leading-tight text-xl lg:text-2xl">
        {{ $t("latestNews") }}
      </h1>

      <div class="widget">
        <div
          v-for="item in others?.filter((i) => i.title) ||
          mostViewed?.filter((i) => i.title)"
          :key="item._id"
          class="space-y-2 py-4"
        >
          <NuxtLink
            :to="$localePath(`/news-details/${item.slug}`)"
            class="right-title"
          >
            {{ item.title }}
          </NuxtLink>
          <div class="medium text-xs text-gray-500 dark:text-gray-200">
            {{ useformatDate2()(item.date) }}
          </div>
          <div
            v-if="item.category.title"
            class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
          >
            #{{ item.category.title }}
          </div>
        </div>

        <!-- <UiPosterNews
          v-for="item in actual.slice(1, 2)"
          :key="item._id"
          :news="item"
          :border="false"
        /> -->
      </div>
    </div>
  </div>
</template>
