import type { News } from '~/interface/interface'

export const useMainStore = defineStore('main-news', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	const data = ref<{
		main: News[]
		actual: News[]
		latest: News[]
	}>({
		main: [],
		actual: [],
		latest: [],
	})

	const getMain = async () => {
		try {
			const res = await $api.get(`/api/news/main/?lang=${locale.value}`)
			data.value.main = res.data
			// console.log('Main', data.value.main)
		} catch (err) {
			console.log('Error Main', err)
		}
	}

	const getActual = async () => {
		try {
			const res = await $api.get(`/api/news/actuals/?lang=${locale.value}`)
			data.value.actual = res.data
			// console.log('Actual', data.value.actual)
		} catch (err) {
			console.log('Error Main', err)
		}
	}

	const getLatest = async () => {
		try {
			const res = await $api.get(`/api/news/latest/?lang=${locale.value}`)
			data.value.latest = res.data
			// console.log('Latest', data.value.latest)
		} catch (err) {
			console.log('Error Main', err)
		}
	}

	return {
		data,
		getMain,
		getActual,
		getLatest,
	}
})
