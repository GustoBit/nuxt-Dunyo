<script setup lang="ts">
import type { Video } from '~/interface/interface'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
const breaking = ref(Array(200).fill('Breaking News'))

defineProps<{
	data: Video[]
}>()
</script>

<template>
	<ClientOnly>
		<div class="px-4 py-10 lg:px-8 lg:py-[74px] relative rounded-[26px] overflow-hidden bg-gradient-to-b from-blue600 to-blue500 mb-[52px]">
			<div class="relative z-10">
				<div
					v-for="item in data.slice(0, 1)"
					:key="item._id"
					class="mb-6 relative max-w-[1113px] mx-auto"
				>
					<div class="h-[240px] sm:h-[340px] mx-auto xl:w-[1113px] lg:!h-[575px] xl:mb-[56px] rounded-xl overflow-hidden">
						<iframe
							:src="item?.link"
							width="100%"
							height="100%"
							loading="lazy"
							class="w-full h-full"
							frameborder="0"
							allowfullscreen
						/>
					</div>
					<div class="hidden lg:block gradient rounded-b-xl">
						<NuxtLink
							:to="$localePath(`/`)"
							class="text-white800 medium text-2xl lg:text-[32px] line-clamp-2 xl:hover:text-blue700 active:text-blue700"
						>
							{{ item.title }}
						</NuxtLink>
					</div>
					<NuxtLink
						:to="$localePath('/')"
						class="text-white900 medium text-xl lg:hidden line-clamp-3 xl:hover:text-blue700 active:text-blue700 mt-2"
					>
						{{ item.title }}
					</NuxtLink>
				</div>

				<div class="grid grid-cols-1 gap-[26px] lg:grid-cols-2 xl:grid-cols-4">
					<div
						v-for="item in data.slice(1, 5)"
						:key="item._id"
					>
						<div class="space-y-2 lg:space-y-4">
							<div class="h-[240px] sm:h-[340px] xl:h-[282px] rounded-xl overflow-hidden">
								<iframe
									:src="item?.link"
									width="100%"
									height="100%"
									loading="lazy"
									class="w-full h-full"
									frameborder="0"
									allowfullscreen
								/>
							</div>
							<NuxtLink
								:to="$localePath('/')"
								class="text-white900 medium text-xl lg:text-2xl line-clamp-3 xl:hover:text-blue700 active:text-blue700"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>

			<div class="Swiper absolute z-0 top-0 xl:-top-16 left-0 right-0 select-none pointer-events-none">
				<Swiper
					:modules="[Autoplay]"
					:loop="true"
					:space-between="69"
					:autoplay="{
						delay: 0,
						disableOnInteraction: false,
						pauseOnMouseEnter: false,
					}"
					:speed="10000"
					:slides-per-view="1"
					:breakpoints="{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}"
					class="w-full h-full"
				>
					<SwiperSlide
						v-for="(item, index) in breaking"
						:key="index"
						class="!w-fit"
					>
						<div class="text-white900/5 semibold text-2xl sm:text-5xl xl:text-[150px] text-nowrap">
							{{ item }}
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			<div class="Swiper absolute z-0 bottom-[240px] lg:bottom-[383px] left-0 right-0 select-none pointer-events-none">
				<Swiper
					:modules="[Autoplay]"
					:loop="true"
					:space-between="69"
					:autoplay="{
						delay: 0,
						disableOnInteraction: false,
						pauseOnMouseEnter: false,
					}"
					:speed="10000"
					:slides-per-view="1"
					:breakpoints="{
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}"
					class="w-full h-full"
				>
					<SwiperSlide
						v-for="(item, index) in breaking"
						:key="index"
						class="!w-fit"
					>
						<div class="text-white900/5 semibold text-2xl sm:text-5xl xl:text-[150px] text-nowrap">
							{{ item }}
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</ClientOnly>
</template>

<style>
.Swiper .swiper-wrapper {
	transition-timing-function: linear;
}

.mySwiper .swiper-slide {
	width: 25%;
	opacity: 0.6;
}
.mySwiper .swiper-slide-thumb-active {
	opacity: 1;
}
</style>
