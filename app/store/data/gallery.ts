// import type { Category } from '~/interface/interface'

export const useGalleryStore = defineStore('gallery', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	const limit = ref(1)
	const page = ref(10)

	const get = async () => {
		try {
			const { data } = await $api.get(`/api/photos/?next=${limit.value}&page=${page.value}&lang=${locale.value}`)
			// console.log('Gallery', data)
		} catch (err) {
			console.log('Error Category', err)
		}
	}

	return {
		get,
	}
})
