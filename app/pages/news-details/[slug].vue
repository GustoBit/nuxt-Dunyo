<script setup lang="ts">
import { useNewsStore } from '~/store/data/news'
const newsStore = useNewsStore()
const { data } = storeToRefs(newsStore)

const route = useRoute()
const { locale } = useI18n()

const slug = ref(route.params?.slug)

watch(
	() => route.params.slug,
	(newVal) => {
		slug.value = newVal
		console.log('NewVal', newVal)
		getData()
	}
)

const loading = useLoading()
const getData = async () => {
	loading.start()
	if (typeof slug.value == 'string') {
		await newsStore.getNews(slug.value)
	}
	console.log(data.value)
	console.log(data.value.latest)

	loading.finish()
}

watch(locale, () => {
	getData()
})

onMounted(() => {
	getData()
})

definePageMeta({
	title: 'newsDetails',
})
</script>

<template>
	<div class="container">
		<UiNav />

		<div class="mb-8 space-y-5 xl:space-y-9">
			<h1 class="semibold text-3xl lg:text-4xl">{{ data.news.title }}</h1>

			<div class="grid gap-10 xl:gap-[26px] grid-cols-1 xl:grid-cols-[1fr_316px]">
				<NewsDetailsLeft
					:news="data.news"
					:category="data.category"
				/>

				<NewsDetailsRight
					:actual="data.actual"
					:most-viewed="data.most_viewed"
				/>
			</div>
		</div>

		<UiAds
			:style="`mb-14 h-[180px] lg:h-[263px]`"
			position-btn="26"
		/>

		<UiLatest
			:data="data.latest"
			:title="$t('latestNews')"
			slug=""
			:from="0"
			:to="4"
		/>
	</div>
</template>
