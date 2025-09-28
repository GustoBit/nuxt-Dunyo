import type { Tabs, TabItem } from '~/interface/interface'

export const useTabsStore = defineStore('tabs-news', () => {
	const { $api } = useNuxtApp()
	const { locale, t } = useI18n()

	const tabs = ref<Tabs>({
		latest: [],
		important: [],
		popular: [],
	})

	const popular = ref<TabItem>({
		title: 'mustRead',
		slug: 'popular',
		data: [],
	})

	const latest = ref<TabItem>({
		title: t('latestNews'),
		slug: 'latest',
		data: [],
	})

	const important = ref<TabItem>({
		title: t('actualNews'),
		slug: 'important',
		data: [],
	})

	const get = async () => {
		try {
			const res = await $api.get(`/api/news/tabs/?lang=${locale.value}`)
			tabs.value = res.data
			console.log('DATA', res.data)

			latest.value.data = tabs.value.latest
			important.value.data = tabs.value.important
			popular.value.data = tabs.value.popular
			// console.log('Tabs', res.data)
		} catch (err) {
			console.log('Error Tabs', err)
		}
	}

	return {
		popular,
		latest,
		important,
		get,
	}
})
