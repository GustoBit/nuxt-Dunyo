import type { Language } from '~/interface/interface'
export const useLanguageStore = defineStore('language', () => {
	const { $api } = useNuxtApp()
	const { locale } = useI18n()

	const locales = ref<Language[]>([])

	const language = async () => {
		try {
			const { data } = await $api.get(`/api/languages/all/?lang=${locale.value}`)
			locales.value = data.map((lang: Language) => ({
				code: lang.slug,
				file: `${lang.slug}.json`,
				name: lang.title,
			}))
			// console.log('Languages', data)
			// console.log('Locales', locales.value)
		} catch (err) {
			console.log('Error', err)
		}
	}

	return {
		locales,
		language,
	}
})
