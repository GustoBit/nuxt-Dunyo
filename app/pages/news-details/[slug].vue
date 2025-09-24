<script setup lang="ts">
import { latestNews, data } from '~/data/data'

definePageMeta({
	title: 'newsDetails',
})
</script>

<template>
	<div class="container">
		<UiNav />

		<div class="mb-8 space-y-5 xl:space-y-9">
			<h1 class="text-black800 semibold text-3xl lg:text-4xl">{{ data.title }}</h1>

			<div class="grid gap-10 xl:gap-[26px] grid-cols-1 xl:grid-cols-[1fr_316px]">
				<NewsDetailsLeft
					:img="data.img"
					:description="data.description"
					:date="data.date"
					:category="data.category"
				/>

				<NewsDetailsRight :data="latestNews" />
			</div>
		</div>

		<UiAds
			:style="`mb-14 h-[180px] lg:h-[263px]`"
			position-btn="26"
		/>

		<UiLatest
			:data="latestNews"
			:from="7"
			:to="11"
		/>
	</div>
</template>
