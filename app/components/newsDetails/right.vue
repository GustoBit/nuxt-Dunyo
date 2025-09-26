<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	mostViewed: News[]
	actual: News[]
}>()
</script>

<template>
	<div class="space-y-8">
		<div class="space-y-5">
			<h1 class="semibold leading-tight text-xl lg:text-[28px]">{{ $t('latestSportNews') }}</h1>

			<div class="space-y-4">
				<div
					v-for="item in actual.slice(0, 1)"
					:key="item._id"
					class="space-y-3 pb-4 border-b-2 border-gray500 dark:border-gray-500/20"
				>
					<div class="medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="medium title"
					>
						{{ item.title }}
					</NuxtLink>
					<div
						v-if="item.category.title"
						class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
					>
						#{{ item.category.title }}
					</div>
				</div>

				<div
					v-for="item in actual.slice(1, 2)"
					:key="item._id"
					class="space-y-2"
				>
					<div class="h-[240px] sm:h-[480px] lg:h-[520px] xl:h-[282px] overflow-hidden rounded-2xl">
						<NuxtImg
							:src="`${useUrl()}/${item.img}`"
							alt=""
							class="img"
						/>
					</div>
					<div class="medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="medium title"
					>
						{{ item.title }}
					</NuxtLink>
				</div>
			</div>
		</div>

		<div class="">
			<UiAds
				:style="`h-[146px]`"
				position-btn="16"
			/>

			<div class="divide-y-2 divide-gray500 dark:divide-gray-500/20">
				<div
					v-for="item in mostViewed.slice(2, 7)"
					:key="item._id"
					class="py-4 space-y-3"
				>
					<div class="medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="medium title"
					>
						{{ item.title }}
					</NuxtLink>
					<div
						v-if="item.category.title"
						class="select-none text-blue700 dark:text-blue600 light sm:text-lg"
					>
						#{{ item.category.title }}
					</div>
				</div>
			</div>

			<UiAds
				:style="`h-[616px] mt-2.5 hidden xl:block`"
				position-btn="16"
			/>
		</div>
	</div>
</template>
