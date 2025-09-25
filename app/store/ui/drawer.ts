export const useDrawerStore = defineStore('drawer', () => {
	const open = ref(false)
	// const router = useRouter()

	const setOpen = () => {
		open.value = !open.value
	}

	if (import.meta.client) {
		watch(
			open,
			(value) => {
				if (window.innerWidth < 1024) return

				const body = document.body
				if (value) {
					const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
					body.style.paddingRight = `${scrollBarWidth}px`
					body.classList.add('overflow-hidden')
				} else {
					body.style.paddingRight = ''
					body.classList.remove('overflow-hidden')
				}
			},
			{ immediate: true }
		)

		// route o‘zgarganda drawerni yopish
		// router.afterEach(() => {
		// 	if (open.value) {
		// 		open.value = false
		// 	}
		// })
	}

	return {
		open,
		setOpen,
	}
})
