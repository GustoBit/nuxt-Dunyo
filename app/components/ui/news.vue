<script setup lang="ts">
import type { News } from '~/interface/interface'

defineProps<{
	data: News[]
	data2: News[]
	title: string
	title2: string
	slug: string
	slug2: string
	from: number
	to: number
	from2: number
	to2: number
	clas?: string
}>()
</script>

<template>
	<div :class="['grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-[26px]', `${clas}`]">
		<div class="space-y-4 xl:space-y-8">
			<!-- TITLE -->
			<NuxtLink
				:to="$localePath(`/category/${slug}`)"
				class="flex items-center gap-3 w-fit"
			>
				<h1 class="semibold text-xl lg:text-2xl xl:text-[32px] flex-1">
					{{ $t(`${title}`) }}
				</h1>
				<UIcon
					name="heroicons:arrow-long-right-16-solid"
					class="!w-8 !h-8 text-[#141E2D] dark:text-white900"
				/>
			</NuxtLink>

			<!-- DATA -->
			<div class="">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
					<UiPosterNews
						v-for="item in data.slice(0, 2)"
						:key="item._id"
						:news="item"
						:border="true"
					/>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-[27px]">
					<div class="sm:!divide-y-2 divide-gray500 dark:divide-gray-500/20">
						<div
							v-for="item in data.slice(from, to)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500 dark:border-gray-500/20"
						>
							<NuxtLink
								:to="$localePath(`/news-details/${item.slug}`)"
								class="medium text-lg lg:text-xl xl:hover:text-blue900 active:text-blue900 xl:dark:hover:text-gray-300 dark:active:text-gray-300 line-clamp-3"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
					<div class="sm:!divide-y-2 divide-gray500 dark:divide-gray-500/20">
						<div
							v-for="item in data.slice(from2, to2)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500 dark:border-gray-500/20"
						>
							<NuxtLink
								:to="$localePath(`/news-details/${item.slug}`)"
								class="medium text-lg lg:text-xl xl:hover:text-blue900 active:text-blue900 xl:dark:hover:text-gray-300 dark:active:text-gray-300 line-clamp-3"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-4 xl:space-y-8">
			<!-- TITLE -->
			<NuxtLink
				:to="$localePath(`/category/${slug2}`)"
				class="flex items-center gap-3 w-fit"
			>
				<h1 class="semibold text-xl lg:text-2xl xl:text-[32px] flex-1">
					{{ $t(`${title2}`) }}
				</h1>
				<UIcon
					name="heroicons:arrow-long-right-16-solid"
					class="!w-8 !h-8 text-[#141E2D] dark:text-white900"
				/>
			</NuxtLink>

			<!-- DATA -->
			<div class="">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
					<UiPosterNews
						v-for="item in data2.slice(0, 2)"
						:key="item._id"
						:news="item"
						:border="true"
					/>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-[27px]">
					<div class="sm:!divide-y-2 divide-gray500 dark:divide-gray-500/20">
						<div
							v-for="item in data2.slice(from, to)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500 dark:border-gray-500/20"
						>
							<NuxtLink
								:to="$localePath(`/news-details/${item.slug}`)"
								class="medium text-lg lg:text-xl xl:hover:text-blue900 active:text-blue900 line-clamp-3 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
					<div class="sm:!divide-y-2 divide-gray500 dark:divide-gray-500/20">
						<div
							v-for="item in data2.slice(from2, to2)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500 dark:border-gray-500/20"
						>
							<NuxtLink
								:to="$localePath(`/news-details/${item.slug}`)"
								class="medium text-lg lg:text-xl xl:hover:text-blue900 active:text-blue900 line-clamp-3 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
