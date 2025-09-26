<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	data: News[]
}>()
</script>

<template>
	<div
		v-if="data.length > 0"
		class="space-y-8"
	>
		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-[26px] xl:grid-cols-4">
			<div
				v-for="item in data.slice(0, 4)"
				:key="item._id"
				class="pb-4 lg:pb-[26px] space-y-2 lg:space-y-4 border-b-2 border-gray500 dark:border-gray-500/20"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<NuxtImg
						:src="`${useUrl()}/${item.img}`"
						alt=""
						class="img"
					/>
				</div>
				<div class="date medium">{{ useformatDate2()(item.date) }}</div>
				<NuxtLink
					:to="$localePath(`/news-details/${item.slug || 'de'}`)"
					class="medium title"
				>
					{{ item.title }}
				</NuxtLink>
				<div
					v-if="item.category?.title"
					class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
				>
					#{{ item.category.title }}
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-[26px] xl:grid-cols-4">
			<div
				v-for="item in data.slice(4)"
				:key="item._id"
				class="py-[26px] border-b-2 border-gray500 dark:border-gray-500/20"
			>
				<NuxtLink
					:to="$localePath(`/news-details/${item.slug || 'de'}`)"
					class="medium text-xl lg:text-2xl xl:hover:text-blue900 active:text-blue900 line-clamp-3 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
				>
					{{ item.title }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
