<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	data: News[]
}>()
</script>

<template>
	<div class="space-y-8">
		<div class="space-y-5">
			<h1 class="text-black800 semibold leading-tight text-[28px]">{{ $t('latestSportNews') }}</h1>

			<div class="space-y-4">
				<div
					v-for="item in data.slice(0, 1)"
					:key="item._id"
					class="space-y-3 pb-4 border-b-2 border-gray500"
				>
					<div class="medium date">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="medium title"
					>
						{{ item.title }}
					</NuxtLink>
					<UiCategory :category="item.category" />
				</div>

				<div
					v-for="item in data.slice(1, 2)"
					:key="item._id"
					class="space-y-2"
				>
					<div class="h-[240px] sm:h-[480px] lg:h-[520px] xl:h-[282px] overflow-hidden rounded-2xl">
						<img
							:src="item.img"
							alt=""
							class="img"
						/>
					</div>
					<div class="medium date">{{ formatDate2(item.date) }}</div>
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

			<div class="divide-y-2 divide-gray500">
				<div
					v-for="item in data.slice(2, 7)"
					:key="item._id"
					class="py-4 space-y-3"
				>
					<div class="medium date">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath(`/news-details/${item.slug}`)"
						class="medium title"
					>
						{{ item.title }}
					</NuxtLink>
					<UiCategory :category="item.category" />
				</div>
			</div>

			<UiAds
				:style="`h-[616px] mt-2.5 hidden xl:block`"
				position-btn="16"
			/>
		</div>
	</div>
</template>
