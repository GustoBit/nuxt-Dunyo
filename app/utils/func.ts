const months = [
	{ value: 0, translates: { en: 'January', ru: 'Январь', uz: 'Yanvar', 'uz-cyrl': 'Январ' } },
	{ value: 1, translates: { en: 'February', ru: 'Февраль', uz: 'Fevral', 'uz-cyrl': 'Февраль' } },
	{ value: 2, translates: { en: 'March', ru: 'Март', uz: 'Mart', 'uz-cyrl': 'Март' } },
	{ value: 3, translates: { en: 'April', ru: 'Апрель', uz: 'Aprel', 'uz-cyrl': 'Апрель' } },
	{ value: 4, translates: { en: 'May', ru: 'Май', uz: 'May', 'uz-cyrl': 'Май' } },
	{ value: 5, translates: { en: 'June', ru: 'Июнь', uz: 'Iyun', 'uz-cyrl': 'Июн' } },
	{ value: 6, translates: { en: 'July', ru: 'Июль', uz: 'Iyul', 'uz-cyrl': 'Июл' } },
	{ value: 7, translates: { en: 'August', ru: 'Август', uz: 'Avgust', 'uz-cyrl': 'Август' } },
	{ value: 8, translates: { en: 'September', ru: 'Сентябрь', uz: 'Sentabr', 'uz-cyrl': 'Сентябр' } },
	{ value: 9, translates: { en: 'October', ru: 'Октябрь', uz: 'Oktabr', 'uz-cyrl': 'Октябр' } },
	{ value: 10, translates: { en: 'November', ru: 'Ноябрь', uz: 'Noyabr', 'uz-cyrl': 'Ноябр' } },
	{ value: 11, translates: { en: 'December', ru: 'Декабрь', uz: 'Dekabr', 'uz-cyrl': 'Декабр' } },
]

function formatDate(date: Date): string {
	const { locale } = useI18n()
	const day = String(date.getDate()).padStart(2, '0')
	const monthIndex = date.getMonth()
	const monthObj = months.find((m) => m.value === monthIndex)

	// Agar topilmasa fallback
	const month = monthObj ? monthObj.translates[locale.value as keyof typeof monthObj.translates] : '???'
	const year = date.getFullYear()

	return `${day} ${month}, ${year}`
}

function formatDate2(date: Date): string {
	const { locale } = useI18n()
	const day = String(date.getDate()).padStart(2, '0')
	const monthIndex = date.getMonth()
	const monthObj = months.find((m) => m.value === monthIndex)

	// Agar topilmasa fallback
	const month = monthObj ? monthObj.translates[locale.value as keyof typeof monthObj.translates] : '???'
	const year = date.getFullYear()

	return `${month} ${day}, ${year}`
}

export { months, formatDate, formatDate2 }
