import type { Videos, Video } from '~/interface/interface'
import { getId } from '@/utils/video'

export const useVideoStore = defineStore('video-news', () => {
	const { $api } = useNuxtApp()

	const limit = ref<number>(1)
	const page = ref<number>(6)

	const data = ref<Videos>({
		count: 0,
		important_dates: [],
		links: [],
		news: [],
	})

	const video = ref<Video[]>([])

	const get = async () => {
		try {
			const res = await $api.get(`/api/youtube/?next=${limit.value}&page=${page.value}`)
			// console.log('Res Data', res.data)
			data.value = res.data
			// console.log('Videos', data.value)

			video.value = data.value.links

			video.value = [
				...data.value.links.map((d) => ({
					...d,
					link: getId(d.url),
				})),
			]
			// console.log('Video', video.value)
		} catch (err) {
			console.log('Error Category', err)
		}
	}

	return {
		video,
		get,
	}
})
