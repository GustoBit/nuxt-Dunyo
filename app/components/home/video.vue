<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperClass } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import img from '~/assets/img/img.jpg'
const breaking = ref(Array(200).fill('Breaking News'))

const thumbsSwiper = ref<SwiperClass | null>(null)

const setThumbsSwiper = (swiper: SwiperClass) => {
	thumbsSwiper.value = swiper
}

const data = ref([
	{
		_id: '1',
		title: '‘Explosion Reported in Tashkent’s Central District’',
		img: img,
	},
	{
		_id: '2',
		title: '‘Explosion Reported in Tashkent’s Central District’',
		img: img,
	},
	{
		_id: '3',
		title: '‘Uzbekistan’s Economy Grows 5.3% in Q2’',
		img: img,
	},
	{
		_id: '4',
		title: '‘Tashkent Becomes Regional Hub for Startups’',
		img: img,
	},
	{
		_id: '5',
		title: '‘Global Protests Erupt Over Climate Inaction’',
		img: img,
	},
])
</script>

<template>
	<ClientOnly>
		<div class="px-4 py-10 lg:px-8 lg:py-[74px] relative rounded-[26px] overflow-hidden bg-gradient-to-b from-blue600 to-blue500 mb-[52px]">
			<div class="relative z-10">
				<ClientOnly>
					<Swiper
						:space-between="10"
						:navigation="false"
						:thumbs="{ swiper: thumbsSwiper }"
						:loop="true"
						:modules="[Navigation, Thumbs]"
						class="mb-6 w-11/12 h-[240px] sm:h-[340px] xl:w-[1113px] lg:!h-[575px] xl:mb-[56px] rounded-xl overflow-hidden"
					>
						<SwiperSlide
							v-for="item in data"
							:key="item._id"
						>
							<img
								:src="item.img"
								alt=""
								class="object-cover object-center w-full h-full"
							/>
						</SwiperSlide>
					</Swiper>
				</ClientOnly>

				<!-- THUMBS -->
				<ClientOnly>
					<Swiper
						v-if="data.length > 1"
						:space-between="26"
						:slides-per-view="2"
						:watch-slides-progress="true"
						:breakpoints="{
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
							1280: {
								slidesPerView: 4,
							},
						}"
						:modules="[Navigation, Thumbs]"
						class="!h-fit mySwiper"
						@swiper="setThumbsSwiper"
					>
						<SwiperSlide
							v-for="item in data"
							:key="item._id"
						>
							<div class="space-y-2 lg:space-y-4">
								<div class="h-[120px] sm:h-[200px] xl:h-[282px] rounded-xl overflow-hidden">
									<img
										:src="item.img"
										alt=""
										class="object-cover object-center w-full h-full block"
									/>
								</div>
								<NuxtLink
									:to="$localePath('/')"
									class="text-white900 medium sm:text-xl lg:text-2xl"
								>
									{{ item.title }}
								</NuxtLink>
							</div>
						</SwiperSlide>
					</Swiper>
				</ClientOnly>
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
