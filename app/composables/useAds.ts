export const useAds = () => {
	const state = useState('adsEnabled', () => true)
	return state.value
}
