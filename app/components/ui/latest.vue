<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	data: News[]
	title: string
	slug: string
}>()
</script>

<template>
	<div class="space-y-4 lg:space-y-[26px]">
		<div class="flex items-center justify-between gap-2">
			<h1 class="semibold text-3xl sm:text-4xl lg:text-[42px]">{{ title }}</h1>

			<NuxtLink
				:to="$localePath('/')"
				class="medium see"
			>
				{{ $t('seeAll') }}
			</NuxtLink>
		</div>

		<div
			v-if="!useAds()"
			class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]"
		>
			<div
				v-for="item in data.slice(0, 4)"
				:key="item._id"
				class="space-y-2 xl:space-y-4"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<NuxtImg
						:src="`${useUrl()}/${item.img}`"
						alt=""
						class="img"
					/>
				</div>
				<div>
					<div class="mb-1 xl:mb-4 medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="block mb-3 xl:mb-[28px]"
					>
						<p class="medium title">
							{{ item.title }}
						</p>
					</NuxtLink>
					<!-- <div class="text-blue400 medium">{{ item.topic }} - {{ item.read }}</div> -->
				</div>
			</div>
		</div>

		<div
			v-if="useAds()"
			class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]"
		>
			<div
				v-for="item in data.slice(0, 2)"
				:key="item._id"
				class="space-y-2 xl:space-y-4"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<NuxtImg
						:src="`${useUrl()}/${item.img}`"
						alt=""
						class="img"
					/>
				</div>
				<div>
					<div class="mb-1 xl:mb-4 medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="block"
					>
						<p class="medium title">
							{{ item.title }}
						</p>
					</NuxtLink>
					<!-- <div class="text-blue400 medium mt-3 xl:mt-[28px]">{{ item.topic }} - {{ item.read }}</div> -->
				</div>
			</div>
			<UiAds
				:style="`h-[240px] sm:h-full`"
				position-btn="16"
			/>
			<div
				v-for="item in data.slice(2, 3)"
				:key="item._id"
				class="space-y-2 xl:space-y-4"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<NuxtImg
						:src="`${useUrl()}/${item.img}`"
						alt=""
						class="img"
					/>
				</div>
				<div>
					<div class="mb-1 xl:mb-4 medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="block"
					>
						<p class="medium title">
							{{ item.title }}
						</p>
					</NuxtLink>
					<!-- <div class="text-blue400 medium mt-3 xl:mt-[28px]">{{ item.topic }} - {{ item.read }}</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
