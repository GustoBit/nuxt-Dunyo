import type { N, News } from '~/interface/interface'

export const useMainStore = defineStore('main-news', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	const data = ref<{
		main: News[]
		actual: News[]
		latest: News[]
		slider: N[]
	}>({
		main: [],
		actual: [],
		latest: [],
		slider: [],
	})

	const getMain = async () => {
		try {
			const res = await $api.get(`/api/news/main/?lang=${locale.value}`)
			data.value.main = res.data
		} catch (err) {
			console.log('Error Main', err)
		}
	}

	const getActual = async () => {
		try {
			const res = await $api.get(`/api/news/actuals/?lang=${locale.value}`)
			data.value.actual = res.data
		} catch (err) {
			console.log('Error Main', err)
		}
	}

	const getLatest = async () => {
		try {
			const res = await $api.get(`/api/news/latest/?lang=${locale.value}`)
			data.value.latest = res.data
		} catch (err) {
			console.log('Error Main', err)
		}
	}

	const slider = ref<News[]>([])
	const getSliderNews = async () => {
		try {
			const { data } = await $api.get(`/api/news/slider/?lang=${locale.value}`)
			console.log('Slider', data)
			slider.value = data || []
		} catch (err) {
			console.log('Error Slider', err)
		}
	}

	return {
		slider,
		getSliderNews,
		data,
		getMain,
		getActual,
		getLatest,
	}
})
