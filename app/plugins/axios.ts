import axios from 'axios'

export default defineNuxtPlugin(() => {
	const api = axios.create({
		baseURL: useUrl(),
		headers: {
			'Content-type': 'application/json',
		},
	})

	return {
		provide: {
			api,
		},
	}
})
