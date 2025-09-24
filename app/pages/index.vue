<script setup lang="ts">
import type { Data } from '~/interface/interface'
import img from '@/assets/img/img.jpg'
const newsByCountries = ref<Data[]>([
	{
		_id: '1',
		date: new Date(),
		title: '‘Global Protests Erupt Over Climate Inaction’',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'first',
	},
	{
		_id: '2',
		date: new Date(),
		title: '‘Explosion Reported in Tashkent’s Central District’',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'second',
	},
	{
		_id: '3',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'third',
	},
	{
		_id: '4',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'fourth',
	},
	{
		_id: '5',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'fifth',
	},
	{
		_id: '6',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'sixth',
	},
	{
		_id: '7',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'seventh',
	},
	{
		_id: '8',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'eight',
	},
])

const sportNews = ref<Data[]>([
	{
		_id: '1',
		date: new Date(),
		title: '‘Global Protests Erupt Over Climate Inaction’',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'first',
	},
	{
		_id: '2',
		date: new Date(),
		title: '‘Explosion Reported in Tashkent’s Central District’',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'second',
	},
	{
		_id: '3',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'third',
	},
	{
		_id: '4',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'fourth',
	},
	{
		_id: '5',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'fifth',
	},
	{
		_id: '6',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'sixth',
	},
	{
		_id: '7',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'seventh',
	},
	{
		_id: '8',
		date: new Date(),
		title: 'Education Reform to Digitize All High Schools by 2027',
		category: ['#Country', '#Presidents'],
		img: img,
		slug: 'eighth',
	},
])

definePageMeta({
	title: 'home',
})
</script>

<template>
	<div class="container">
		<UiNav />
		<HomeHero />
		<UiNews
			:news-by-countries="newsByCountries"
			:sport-news="sportNews"
			:from="2"
			:to="5"
			:from2="5"
			:to2="8"
			slug="news-details"
			clas="mb-[72px]"
		/>
		<HomeVideo />
		<UiAds1 mb="mb-8" />
		<HomeLatest />
		<HomeMustRead />
		<UiNews
			slug="news-details"
			:news-by-countries="newsByCountries"
			:sport-news="sportNews"
			:from="2"
			:to="4"
			:from2="4"
			:to2="6"
		/>
	</div>
</template>
