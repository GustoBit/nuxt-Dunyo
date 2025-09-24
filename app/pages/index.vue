<script setup lang="ts">
import { latestNews } from '~/data/data'

definePageMeta({
	title: 'home',
})
</script>

<template>
	<div class="container">
		<UiNav />
		<HomeHero :data="latestNews" />
		<UiNews
			:news-by-countries="latestNews"
			:sport-news="latestNews"
			:from="2"
			:to="5"
			:from2="5"
			:to2="8"
			slug="news-details"
			clas="mb-[72px]"
		/>
		<HomeVideo />
		<UiAds
			:style="`mb-14 h-[180px] lg:h-[263px]`"
			position-btn="26"
		/>
		<div class="mb72">
			<UiLatest
				:data="latestNews"
				:from="0"
				:to="4"
			/>
		</div>
		<HomeMustRead :data="latestNews" />
		<UiNews
			slug="news-details"
			:news-by-countries="latestNews"
			:sport-news="latestNews"
			:from="2"
			:to="4"
			:from2="4"
			:to2="6"
		/>
	</div>
</template>
