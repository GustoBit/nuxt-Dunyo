<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	data: News[]
	title: string
	slug: string
}>()
</script>

<template>
	<div class="space-y-[26px] mb72">
		<div class="flex items-center justify-between gap-2">
			<h1 class="semibold text-3xl sm:text-4xl lg:text-[42px]">{{ $t('mustRead') }}</h1>

			<NuxtLink
				:to="$localePath('/')"
				class="medium see"
			>
				{{ $t('seeAll') }}
			</NuxtLink>
		</div>

		<div class="grid xl:grid-cols-[316px_1fr] gap-[26px]">
			<div class="space-y-4 xl:!divide-y-2 divide-gray500 lg:grid lg:grid-cols-2 lg:gap-6 xl:block">
				<div
					v-for="item in data.slice(0, 4)"
					:key="item._id"
					class="pb-2 space-y-2 border-b-2 xl:border-b-0 border-gray500 dark:border-gray-500/20"
				>
					<div class="medium date">{{ useformatDate2()(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="medium title"
					>
						{{ item.title }}
					</NuxtLink>
					<div class="select-none text-blue700 dark:text-blue600 light text-lg">#{{ item.category.title }}</div>
				</div>
			</div>

			<div class="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[662px_320px] gap-[26px]">
				<div
					v-for="item in data.slice(4, 5)"
					:key="item._id"
					class="h-[320px] sm:h-[420px] lg:h-[616px] overflow-hidden rounded-xl relative"
				>
					<NuxtImg
						:src="`${useUrl()}/${item.img}`"
						alt=""
						class="img"
					/>
					<div class="gradient">
						<div class="text-white500 medium text-lg">{{ useformatDate2()(item.date) }}</div>
						<NuxtLink
							:to="$localePath(`/news-details/${item.slug}`)"
							class="text-white800 medium text-2xl lg:text-[32px] line-clamp-2 xl:hover:text-blue700 active:text-blue700"
						>
							{{ item.title }}
						</NuxtLink>
						<div class="text-white400 light text-lg hidden sm:block">{{ item.text }}</div>
						<!-- <div class="text-white500 medium">{{ item.topic }} - {{ item.read }}</div> -->
					</div>
				</div>

				<div v-if="!useAds()">
					<div
						v-for="item in data.slice(5, 6)"
						:key="item._id"
						class="h-[320px] sm:h-[420px] lg:h-[616px] rounded-xl overflow-hidden relative"
					>
						<NuxtImg
							:src="`${useUrl()}/${item.img}`"
							alt=""
							class="img"
						/>
						<div class="gradient">
							<div class="text-white500 medium text-lg">{{ useformatDate2()(item.date) }}</div>
							<NuxtLink
								:to="$localePath(`/news-details/${item.slug}`)"
								class="text-white800 medium text-2xl line-clamp-2 xl:hover:text-blue700 active:text-blue700"
							>
								{{ item.title }}
							</NuxtLink>
							<!-- <div class="text-white500 medium">{{ item.topic }} - {{ item.read }}</div> -->
						</div>
					</div>
				</div>
				<UiAds
					:style="`h-[180px] lg:h-[616px]`"
					position-btn="16"
				/>
			</div>
		</div>
	</div>
</template>
