export interface SearchItem {
	id: number
	name: string
	description: string
	url: string
	icon: Component
}

export interface News {
	_id: string
	title: string
	img: string
	description: string
	date: Date
	category: string[]
	slug: string
	topic: string
	read: string
}
