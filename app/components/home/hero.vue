<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import type { News } from '~/interface/interface'

defineProps<{
	main: News[]
	latest: News[]
	actual: News[]
}>()
</script>

<template>
	<div class="grid xl:grid-cols-[minmax(1000px,_1fr)_316px] gap-[27px] mb72">
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[318px_662px] gap-[27px]">
			<div class="order-2 xl:order-none">
				<Swiper
					:modules="[Autoplay, EffectFade]"
					:autoplay="{
						delay: 3000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}"
					effect="fade"
					:speed="800"
					:loop="latest.length > 1"
					:slides-per-view="1"
					:space-between="0"
					class="w-full h-full"
				>
					<SwiperSlide
						v-for="item in latest"
						:key="item._id"
						class="space-y-2 lg:space-y-4"
					>
						<div class="h-[240px] lg:h-[280px] xl:h-[467px] rounded-xl overflow-hidden">
							<NuxtImg
								:src="`${useUrl()}/${item.img}`"
								alt=""
								class="img"
							/>
						</div>
						<div class="medium date">{{ useFormatDate()(item.date) }}</div>
						<NuxtLink
							:to="$localePath(`/news-details/${item.slug}`)"
							class="medium title dark:bg-gray-800 bg-white900"
						>
							{{ item.title }}
						</NuxtLink>

						<div class="select-none text-blue700 dark:text-blue600 light sm:text-lg dark:bg-gray-800 bg-white900">#{{ item.category.title }}</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div class="h-[380px] lg:h-[444px] xl:h-[621px] overflow-hidden rounded-xl relative order-1 xl:order-none">
				<Swiper
					:style="{
						'--swiper-pagination-color': '#fff',
						'--swiper-pagination-bullet-inactive-color': '#fff',
						'--swiper-pagination-bullet-inactive-opacity': '0.5',
					}"
					:modules="[Pagination, Autoplay, EffectFade]"
					:autoplay="{
						delay: 3000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}"
					effect="fade"
					:speed="800"
					:loop="main.length > 1"
					:slides-per-view="1"
					:space-between="10"
					:pagination="{ clickable: true, dynamicBullets: true }"
					class="w-full h-full"
				>
					<SwiperSlide
						v-for="item in main"
						:key="item._id"
					>
						<NuxtImg
							:src="`${useUrl()}/${item.img}`"
							alt=""
							class="img rounded-xl"
						/>

						<div class="gradient rounded-b-xl">
							<div class="text-white500 medium text-lg">{{ useformatDate2()(item.date) }}</div>
							<NuxtLink
								:to="$localePath(`/news-details/${item.slug}`)"
								class="text-white800 medium text-2xl lg:text-[32px] line-clamp-2 xl:hover:text-blue700 active:text-blue700 xl:dark:hover:text-gray-300 dark:active:text-gray-300"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>

		<div class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[27px] xl:block xl:space-y-4 xl:!divide-y-2 divide-gray500 xl:max-h-[631px] xl:overflow-y-auto">
			<div
				v-for="item in actual"
				:key="item._id"
				class="space-y-2 pb-2 border-b-2 xl:border-b-0 border-gray500 dark:border-gray-500/20"
			>
				<div class="medium date">{{ useformatDate2()(item.date) }}</div>
				<NuxtLink
					:to="$localePath(`/news-details/${item.slug}`)"
					class="medium title"
				>
					{{ item.title }}
				</NuxtLink>
				<div class="select-none text-blue700 dark:text-blue600 light sm:text-lg">#{{ item.category.title }}</div>
			</div>
		</div>
	</div>
</template>
