<script setup lang="ts">
import type { News } from '~/interface/interface'

const props = defineProps<{
	data: News[]
	to: number
	from: number
}>()

const d = computed(() => {
	return props.data.slice(props.from, props.to)
})
</script>

<template>
	<div class="space-y-4 lg:space-y-[26px]">
		<div class="flex items-center justify-between gap-2">
			<h1 class="text-black800 semibold text-3xl sm:text-4xl lg:text-[42px]">{{ $t('latestNews') }}</h1>

			<NuxtLink
				:to="$localePath('/')"
				class="text-blue400 medium text-lg sm:text-xl xl:hover:text-blue900 active:text-blue900 active:text-blue900"
			>
				{{ $t('seeAll') }}
			</NuxtLink>
		</div>

		<div
			v-if="!useAds()"
			class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]"
		>
			<div
				v-for="item in d"
				:key="item._id"
				class="space-y-2 xl:space-y-4"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<img
						:src="item.img"
						alt=""
						class="object-cover object-center w-full h-full"
					/>
				</div>
				<div>
					<div class="mb-1 xl:mb-4 medium date">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="block mb-3 xl:mb-[28px]"
					>
						<p class="medium title">
							{{ item.title }}
						</p>
					</NuxtLink>
					<div class="text-blue400 medium">{{ item.topic }} - {{ item.read }}</div>
				</div>
			</div>
		</div>

		<div
			v-if="useAds()"
			class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]"
		>
			<div
				v-for="item in d.slice(0, 2)"
				:key="item._id"
				class="space-y-2 xl:space-y-4"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<img
						:src="item.img"
						alt=""
						class="object-cover object-center w-full h-full"
					/>
				</div>
				<div>
					<div class="mb-1 xl:mb-4 medium date">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="block mb-3 xl:mb-[28px]"
					>
						<p class="medium title">
							{{ item.title }}
						</p>
					</NuxtLink>
					<div class="text-blue400 medium">{{ item.topic }} - {{ item.read }}</div>
				</div>
			</div>
			<UiAds
				:style="`h-[240px] sm:h-full`"
				position-btn="16"
			/>
			<div
				v-for="item in d.slice(2, 3)"
				:key="item._id"
				class="space-y-2 xl:space-y-4"
			>
				<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
					<img
						:src="item.img"
						alt=""
						class="object-cover object-center w-full h-full"
					/>
				</div>
				<div>
					<div class="mb-1 xl:mb-4 medium date">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="block mb-3 xl:mb-[28px]"
					>
						<p class="medium title">
							{{ item.title }}
						</p>
					</NuxtLink>
					<div class="text-blue400 medium">{{ item.topic }} - {{ item.read }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
