export const useSearchModalStore = defineStore('search-modal', () => {
	const show = ref<boolean>(false)

	const setShow = (value: boolean): void => {
		show.value = value
	}

	return {
		show,
		setShow,
	}
})
