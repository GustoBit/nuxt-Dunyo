export const useLoading = () => {
	const show = useState('loadingShow', () => false)

	const start = () => (show.value = true)
	const finish = () => (show.value = false)

	return { show, start, finish }
}
