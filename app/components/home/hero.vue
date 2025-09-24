<script setup lang="ts">
import { formatDate, formatDate2 } from '~/utils/func'
import img from '@/assets/img/img.jpg'

const data = ref([
	{
		_id: '1',
		date: new Date(),
		title: '‘Global Protests Erupt Over Climate Inaction’',
		category: ['#Country', '#Presidents'],
		img: img,
	},
	{
		_id: '2',
		date: new Date(),
		title: '‘Explosion Reported in Tashkent’s Central District’',
		category: ['#Country', '#Presidents'],
		img: img,
	},
	{
		_id: '3',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
	},
	{
		_id: '4',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
	},
	{
		_id: '5',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
	},
	{
		_id: '6',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
	},
])
</script>

<template>
	<div class="grid xl:grid-cols-[minmax(1000px,_1fr)_316px] gap-[27px] mb72">
		<div class="grid sm:grid-cols-2 xl:grid-cols-[318px_662px] gap-[27px]">
			<div
				v-for="item in data.slice(0, 1)"
				:key="item._id"
				class="space-y-2 lg:space-y-4"
			>
				<div class="h-[240px] lg:h-[280px] xl:h-[467px] rounded-xl overflow-hidden">
					<img
						:src="item.img"
						alt=""
						class="w-full h-full object-cover object-center"
					/>
				</div>
				<div class="text-gray300 medium text-lg">{{ formatDate(item.date) }}</div>
				<NuxtLink
					:to="$localePath('/')"
					class="medium text-black800 text-2xl line-clamp-2"
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

			<div
				v-for="item in data.slice(1, 2)"
				:key="item._id"
				class="h-[240px] sm:h-[360px] lg:h-[426px] xl:h-[621px] overflow-hidden rounded-xl relative"
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
				</div>
			</div>
		</div>

		<div class="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-[27px] xl:block xl:space-y-4 xl:!divide-y-2 divide-gray500">
			<div
				v-for="item in data.slice(2, 6)"
				:key="item._id"
				class="space-y-2 pb-2 border-b-2 xl:border-b-0 border-gray500"
			>
				<div class="text-gray300 medium text-lg">{{ formatDate2(item.date) }}</div>
				<NuxtLink
					:to="$localePath('/')"
					class="medium text-black800 text-2xl line-clamp-2"
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
	</div>
</template>
