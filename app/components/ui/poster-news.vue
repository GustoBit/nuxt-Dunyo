<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	news: News
	border: boolean
}>()
</script>

<template>
	<div :class="['space-y-2 lg:space-y-4', border ? 'pb-4 lg:pb-[26px] border-b-2 border-gray500 dark:border-gray-500/20' : '']">
		<NuxtLink
			:to="$localePath(`/news-details/${news.slug}`)"
			class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl block"
		>
			<NuxtImg
				:src="`${useUrl()}/${news.img}`"
				alt=""
				class="img"
			/>
		</NuxtLink>
		<div class="date medium">
			{{ useformatDate2()(news.date) }}
		</div>
		<NuxtLink
			:to="$localePath(`/news-details/${news.slug}`)"
			class="medium title"
		>
			{{ news.title }}
		</NuxtLink>
		<div
			v-if="news.category?.title"
			class="flex items-center gap-4"
		>
			<NuxtLink
				:to="$localePath(`/category/${news.category.slug}`)"
				class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
			>
				#{{ news.category.title }}
			</NuxtLink>
		</div>
	</div>
</template>
