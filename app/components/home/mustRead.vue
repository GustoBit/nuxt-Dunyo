<script setup lang="ts">
import type { Data } from '~/interface/interface'
import { formatDate2 } from '~/utils/func'
import img from '~/assets/img/img.jpg'
import ads2 from '~/assets/img/ads2.jpg'

const data = ref<Data[]>([
	{
		_id: '1',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Explosion Reported in Tashkent’s Central District’',
		topic: 'Politics',
		read: '4 min read',
		description: 'Initial reports confirm minor injuries; police and rescue teams are securing the area and investigating the cause.',
	},
	{
		_id: '2',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Uzbekistan’s Economy Grows 5.3% in Q2’',
		topic: 'Economy',
		read: '3 min read',
		description: 'Initial reports confirm minor injuries; police and rescue teams are securing the area and investigating the cause.',
	},
	{
		_id: '3',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Tashkent Becomes Regional Hub for Startups’',
		topic: 'Technology',
		read: '5 min read',
		description: 'Initial reports confirm minor injuries; police and rescue teams are securing the area and investigating the cause.',
	},
	{
		_id: '4',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Global Protests Erupt Over Climate Inaction’',
		topic: 'World',
		read: '5 min read',
		description: 'Initial reports confirm minor injuries; police and rescue teams are securing the area and investigating the cause.',
	},
	{
		_id: '5',
		category: ['#Country', '#Presidents '],
		date: new Date(),
		img: img,
		title: '‘Explosion Reported in Tashkent’s Central District’',
		topic: 'World',
		read: '5 min read',
		description: 'Initial reports confirm minor injuries; police and rescue teams are securing the area and investigating the cause.',
	},
])
</script>

<template>
	<div class="space-y-[26px] mb72">
		<div class="flex items-center justify-between">
			<h1 class="text-black800 semibold text-4xl lg:text-[42px]">{{ $t('mustRead') }}</h1>

			<NuxtLink
				:to="$localePath('/')"
				class="text-blue400 medium text-xl xl:hover:text-blue900 active:text-blue900"
			>
				{{ $t('seeAll') }}
			</NuxtLink>
		</div>

		<div class="grid xl:grid-cols-[316px_1fr] gap-[26px]">
			<div class="space-y-4 xl:!divide-y-2 divide-gray500 lg:grid lg:grid-cols-2 lg:gap-6 xl:block">
				<div
					v-for="item in data.slice(0, 4)"
					:key="item._id"
					class="pb-2 space-y-2 border-b-2 xl:border-b-0 border-gray500"
				>
					<div class="text-gray300 medium text-lg">{{ formatDate2(item.date) }}</div>
					<NuxtLink
						:to="$localePath('/')"
						class="text-black800 medium text-2xl line-clamp-2"
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

			<div class="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[662px_320px] gap-[26px]">
				<div
					v-for="item in data.slice(4, 5)"
					:key="item._id"
					class="h-[320px] sm:h-[420px] lg:h-[616px] overflow-hidden rounded-xl relative"
				>
					<img
						:src="item.img"
						alt=""
						class="w-full h-full object-cover object-center"
					/>
					<div class="gradient">
						<div class="text-white500 medium text-lg">{{ formatDate2(item.date) }}</div>
						<NuxtLink
							:to="$localePath('/')"
							class="text-white800 medium text-2xl lg:text-[32px] line-clamp-2"
						>
							{{ item.title }}
						</NuxtLink>
						<div class="text-white400 light text-lg hidden sm:block">{{ item.description }}</div>
						<div class="text-white500 medium">{{ item.topic }} - {{ item.read }}</div>
					</div>
				</div>

				<div class="h-[180px] lg:h-[616px] rounded-xl overflow-hidden relative">
					<img
						:src="ads2"
						alt=""
						class="object-cover object-center w-full h-full"
					/>
					<button
						type="button"
						class="cursor-pointer absolute left-3 top-3 bg-yellow500 rounded-[50px] py-2 px-[26px] xl:hover:bg-yellow500/90 active:bg-yellow500/90"
					>
						<p class="text-black800 medium text-xl lg:text-2xl">Ads</p>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
