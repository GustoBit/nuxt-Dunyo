import type { Search } from '~/interface/interface'

export const useSearchStore = defineStore('search-news', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	// const limit = ref(1)
	const page = ref(1)
	const data = ref<Search[]>([])

	const get = async (value: string) => {
		try {
			const res = await $api.get(`/api/search/?title=${value}&lang=${locale.value}&next=${page.value}`)
			console.log('Search', res.data)

			// data.value = res.data
			data.value = Array.isArray(res.data.news) ? res.data.news : []
			console.log(data.value)
		} catch (err) {
			console.log('Error Category', err)
		}
	}

	return {
		get,
		data,
	}
})
