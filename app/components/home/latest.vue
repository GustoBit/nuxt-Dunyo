<script setup lang="ts">
import type { Data } from '~/interface/interface'
import { formatDate2 } from '~/utils/func'
import img from '~/assets/img/img.jpg'

const data = ref<Data[]>([
	{
		_id: '1',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Explosion Reported in Tashkent’s Central District’',
		topic: 'Politics',
		read: '4 min read',
	},
	{
		_id: '2',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Uzbekistan’s Economy Grows 5.3% in Q2’',
		topic: 'Economy',
		read: '3 min read',
	},
	{
		_id: '3',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Tashkent Becomes Regional Hub for Startups’',
		topic: 'Technology',
		read: '5 min read',
	},
	{
		_id: '4',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Global Protests Erupt Over Climate Inaction’',
		topic: 'World',
		read: '5 min read',
	},
])
</script>

<template>
	<div class="space-y-4 lg:space-y-[26px] mb72">
		<div class="flex items-center justify-between">
			<h1 class="text-black800 semibold text-4xl lg:text-[42px]">{{ $t('latestNews') }}</h1>

			<NuxtLink
				:to="$localePath('/')"
				class="text-blue400 medium text-xl xl:hover:text-blue900 active:text-blue900 active:text-blue900"
			>
				{{ $t('seeAll') }}
			</NuxtLink>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[26px]">
			<div
				v-for="item in data"
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
					<div class="mb-1 xl:mb-4 text-blue400 medium text-lg">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath('/')"
						class="block mb-3 xl:mb-[28px] text-black800 medium text-2xl"
					>
						{{ item.title }}
					</NuxtLink>
					<div class="text-blue400 medium">{{ item.topic }} - {{ item.read }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
