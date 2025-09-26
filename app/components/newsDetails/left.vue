<script setup lang="ts">
import type { News, NewsCategory } from '~/interface/interface'
defineProps<{
	news: News
	category: NewsCategory
}>()
</script>

<template>
	<div class="space-y-2 xl:space-y-8">
		<div class="h-[320px] sm:h-[480px] lg:h-[520px] xl:h-[621px] overflow-hidden rounded-2xl">
			<NuxtImg
				:src="`${useUrl()}/${news.img}`"
				alt=""
				class="img"
			/>
		</div>

		<div class="space-y-[26px]">
			<div class="pb-2 xl:pb-[26px] border-b-2 border-gray500 dark:border-gray-500/20">
				<div class="flex items-center justify-between sm:justify-start sm:gap-5 lg:gap-[26px]">
					<div class="text-gray600 dark:text-gray100 medium text-lg sm:text-2xl">{{ useformatDate2()(news.date) }}</div>
					<div class="select-none text-blue700 dark:text-blue600 light sm:text-lg">#{{ category.title }}</div>
				</div>
			</div>

			<div
				class="article__box"
				v-html="news.content"
			/>
		</div>
	</div>
</template>
