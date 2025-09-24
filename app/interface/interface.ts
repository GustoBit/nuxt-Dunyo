export interface SearchItem {
	id: number
	name: string
	description: string
	url: string
	icon: Component
}

export interface Data {
	_id: string
	date: Date
	title: string
	category: string[]
	img: string
	topic?: string
	read?: string
	description?: string
	slug: string
}
