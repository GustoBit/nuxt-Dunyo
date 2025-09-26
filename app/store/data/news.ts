import type { SlugNews } from '~/interface/interface'

export const useNewsStore = defineStore('slug-news', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	const data = ref<SlugNews>({
		news: {
			actual: false,
			chanel: false,
			content: '',
			country: '',
			date: '',
			img: '',
			important_dates: false,
			main: false,
			post_date: null,
			slider: false,
			slug: '',
			status: false,
			subcategory: null,
			telegram: false,
			text: '',
			title: '',
			views: 0,
			__v: 0,
			_id: '',
			category: {
				img: [],
				main: false,
				parent: '',
				slug: '',
				status: false,
				title: '',
				__v: 0,
				_id: '',
			},
		},
		most_viewed: [],
		latest: [],
		actual: [],
		category: {
			img: [],
			main: false,
			parent: '',
			slug: '',
			status: false,
			title: '',
			__v: 0,
			_id: '',
		},
	})

	const getNews = async (slug: string) => {
		try {
			if (slug.length > 0) {
				const res = await $api.get(`/api/news/get/${slug}/?lang=${locale.value}`)

				data.value = res.data
			}
		} catch (err) {
			console.log('Error Get News', err)
		}
	}

	return {
		data,
		getNews,
	}
})
