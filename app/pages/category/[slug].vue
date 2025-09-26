<script setup lang="ts">
import { useCategoryStore } from '~/store/data/category'
const categoryStore = useCategoryStore()
const { data } = storeToRefs(categoryStore)

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
		await categoryStore.getSecondCats(slug.value)
	}
	loading.finish()
}

watch(locale, () => {
	getData()
})

onMounted(() => {
	getData()
})

definePageMeta({
	title: 'category',
})
</script>

<template>
	<div class="container">
		<UiNav />
		<CategoryHero
			:main="data.main_news"
			:category-news="data.category_news"
		/>
		<CategoryMiddle :data="data.categories[0]?.news ?? []" />
		<UiAds
			:style="`mb-8 h-[180px] lg:h-[263px]`"
			position-btn="26"
		/>
		<CategoryLast :data="data.categories[1]?.news ?? []" />
	</div>
</template>
