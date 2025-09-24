export const useSearchStore = defineStore('search', () => {
	const show = ref<boolean>(false)

	const setShow = (value: boolean): void => {
		show.value = value
	}

	return {
		show,
		setShow,
	}
})
