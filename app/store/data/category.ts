import type { Category, SlugCategory } from '~/interface/interface'

export const useCategoryStore = defineStore('category', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	const category = ref<Category[]>([])
	const hasSub = ref<Category[]>([])

	const get = async () => {
		try {
			const { data } = await $api.get(`/api/category/all/?lang=${locale.value}`)
			category.value = data
			console.log(data);
			
			hasSub.value = [...data.filter((value: Category) => value.subs.length > 0)]
		} catch (err) {
			console.log('Error Category', err)
		}
	}

	const getFirstCats = async () => {
		try {
			const res = $api.get(`/api/category/main/?lang=${locale.value}`)
			console.log('GetFirstCats', res)
		} catch (err) {
			console.log('Error Category', err)
		}
	}

	const data = ref<SlugCategory>({
		categories: [],
		category_news: [],
		main_news: {
			category: {
				slug: '',
				_id: '',
			},
			actual: false,
			chanel: false,
			content: '',
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
		},
		parent_category: {
			img: [],
			main: false,
			parent: null,
			slug: '',
			status: false,
			title: '',
			__v: 0,
			_id: '',
		},
	})

	const getSecondCats = async (slug: string) => {
		try {
			const res = await $api.get(`/api/category/tabs/${slug}/?lang=${locale.value}`)
			console.log('Second Res', res.data)
			data.value = res.data
		} catch (err) {
			console.log('Error Category', err)
		}
	}

	return {
		category,
		hasSub,
		get,
		getFirstCats,
		getSecondCats,
		data,
	}
})
