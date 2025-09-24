<script setup lang="ts">
import type { News } from '~/interface/interface'
import { formatDate2 } from '~/utils/func'

defineProps<{
	newsByCountries: News[]
	sportNews: News[]
	from: number
	to: number
	from2: number
	to2: number
	clas?: string
	slug: string
}>()
</script>

<template>
	<div :class="['grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-[26px] ', `${clas}`]">
		<div class="space-y-4 xl:space-y-8">
			<!-- TITLE -->
			<NuxtLink
				:to="$localePath(`/`)"
				class="flex items-center gap-3 w-fit"
			>
				<h1 class="text-black800 semibold text-2xl lg:text-[32px] flex-1">
					{{ $t('newsByCountries') }}
				</h1>
				<UIcon
					name="heroicons:arrow-long-right-16-solid"
					class="!w-8 !h-8 text-[#141E2D]"
				/>
			</NuxtLink>

			<!-- DATA -->
			<div class="">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
					<div
						v-for="item in newsByCountries.slice(0, 2)"
						:key="item._id"
						class="pb-4 lg:pb-[26px] space-y-2 lg:space-y-4 border-b-2 border-gray500"
					>
						<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
							<img
								:src="item.img"
								alt=""
								class="object-cover object-center w-full h-full"
							/>
						</div>
						<div class="text-gray300 medium text-lg">{{ formatDate2(item.date) }}</div>
						<NuxtLink
							:to="$localePath(`/${slug}/${item.slug}`)"
							class="medium title"
						>
							{{ item.title }}
						</NuxtLink>
						<div class="flex items-center gap-4">
							<div
								v-for="(c, i) in item.category.slice(0, 2)"
								:key="i"
								class="select-none text-blue700 light text-lg"
							>
								{{ c }}
							</div>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-[27px]">
					<div class="sm:!divide-y-2 divide-gray500">
						<div
							v-for="item in newsByCountries.slice(from, to)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500"
						>
							<NuxtLink
								:to="$localePath(`/${slug}/${item.slug}`)"
								class="text-black800 medium text-2xl xl:hover:text-blue900 active:text-blue900"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
					<div class="sm:!divide-y-2 divide-gray500">
						<div
							v-for="item in newsByCountries.slice(from2, to2)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500"
						>
							<NuxtLink
								:to="$localePath(`/${slug}/${item.slug}`)"
								class="text-black800 medium text-2xl xl:hover:text-blue900 active:text-blue900"
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
				:to="$localePath(`/`)"
				class="flex items-center gap-3 w-fit"
			>
				<h1 class="text-black800 semibold text-2xl lg:text-[32px] flex-1">
					{{ $t('sportNews') }}
				</h1>
				<UIcon
					name="heroicons:arrow-long-right-16-solid"
					class="!w-8 !h-8 text-[#141E2D]"
				/>
			</NuxtLink>

			<!-- DATA -->
			<div class="">
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
					<div
						v-for="item in sportNews.slice(0, 2)"
						:key="item._id"
						class="pb-4 lg:pb-[26px] space-y-2 lg:space-y-4 border-b-2 border-gray500"
					>
						<div class="h-[240px] lg:h-[282px] overflow-hidden rounded-xl">
							<img
								:src="item.img"
								alt=""
								class="object-cover object-center w-full h-full"
							/>
						</div>
						<div class="text-gray300 medium text-lg">{{ formatDate2(item.date) }}</div>
						<NuxtLink
							:to="$localePath(`/${slug}/${item.slug}`)"
							class="medium title"
						>
							{{ item.title }}
						</NuxtLink>
						<div class="flex items-center gap-4">
							<div
								v-for="(c, i) in item.category.slice(0, 2)"
								:key="i"
								class="select-none text-blue700 light text-lg"
							>
								{{ c }}
							</div>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-[27px]">
					<div class="sm:!divide-y-2 divide-gray500">
						<div
							v-for="item in sportNews.slice(from, to)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500"
						>
							<NuxtLink
								:to="$localePath(`/${slug}/${item.slug}`)"
								class="text-black800 medium text-2xl xl:hover:text-blue900 active:text-blue900"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
					<div class="sm:!divide-y-2 divide-gray500">
						<div
							v-for="item in sportNews.slice(from2, to2)"
							:key="item._id"
							class="py-[26px] border-b-2 sm:border-0 border-gray500"
						>
							<NuxtLink
								:to="$localePath(`/${slug}/${item.slug}`)"
								class="text-black800 medium text-2xl xl:hover:text-blue900 active:text-blue900"
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
