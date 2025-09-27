export interface SearchItem {
	id: number
	name: string
	description: string
	url: string
	icon: Component
}

export interface Language {
	_id: string
	slug: string
	status: boolean
	title: string
	__v: number
}

export interface Category {
	_id: string
	__v: number
	title: string
	status: boolean
	slug: string
	parent: null
	main: boolean
	img: string[]
	subs?: Subs[]
}

export interface Subs {
	_id: string
	__v: number
	title: string
	status: boolean
	slug: string
	parent: string
	main: boolean
	img: string[]
}

export interface NewsCategory {
	img?: string[]
	main?: boolean
	parent?: string
	slug: string
	status?: boolean
	title?: string
	__v?: number
	_id: string
}

export interface News {
	category: NewsCategory
	actual: boolean
	chanel: boolean
	content: string
	country?: string
	date: string
	img: string
	important_dates: boolean
	main: boolean
	post_date: null
	slider: boolean
	slug: string
	status: boolean
	subcategory: null
	telegram: boolean
	text: string
	title: string
	views: number
	__v: number
	_id: string
}

export interface Tabs {
	latest: News[]
	important: News[]
	popular: News[]
}

export interface TabItem {
	title: string
	slug: string
	data: News[]
}

export interface Video {
	status: boolean
	title: string
	url: string
	__v: number
	_id: string
	link?: string
}

export interface ImportantDate {
	actual: boolean
	category: string
	content: string
	date: string
	img: string
	important_dates: boolean
	post_date: '2023-07-17T19:00:00.000Z'
	slug: string
	status: boolean
	subcategory: null
	time: string
	title: string
	translates: string[]
	views: number
	__v: number
	_id: string
}

export interface New {
	actual: boolean
	category: string
	chanel: boolean
	content: string
	date: string
	img: string
	important_dates: boolean
	main: boolean
	post_date: string
	slider: boolean
	slug: string
	status: boolean
	subcategory: null
	time: string
	title: string
	translates: string[]
	views: number
	__v: number
	_id: string
}

export interface Videos {
	count: number
	important_dates: ImportantDate[]
	links: Video[]
	news: New[]
}

export interface SlugNews {
	actual: News[]
	category: NewsCategory
	latest: News[]
	most_viewed: News[]
	news: News
}

export interface Categories {
	img: string[]
	main: boolean
	news: News[]
	parent: string
	slug: string
	status: boolean
	title: string
	__v: number
	_id: string
}

export interface CategoryNews {
	actual: boolean
	category: { _id: string; slug: string }
	chanel: boolean
	content: string
	country: 'UZ'
	date: string
	img: string
	important_dates: boolean
	main: boolean
	post_date: null
	slider: boolean
	slug: string
	status: boolean
	subcategory: null
	telegram: boolean
	text: string
	title: string
	views: number
	__v: number
	_id: string
}

export interface MainNews {
	category: {
		slug: string
		_id: string
	}
	actual: boolean
	chanel: boolean
	content: string
	date: string
	img: string
	important_dates: boolean
	main: boolean
	post_date: null
	slider: boolean
	slug: string
	status: boolean
	subcategory: null
	telegram: boolean
	text: string
	title: string
	views: number
	__v: number
	_id: string
}

export interface ParentCategory {
	img: string[]
	main: boolean
	parent: null
	slug: string
	status: boolean
	title: string
	__v: number
	_id: string
}

export interface SlugCategory {
	categories?: Categories[]
	category_news?: CategoryNews[]
	main_news?: MainNews
	news?: MainNews
	parent_category?: ParentCategory
}

export interface CategoryNew {
	actual: News,
	news: News[],
	category: Category
}

export interface Search {
	actual: boolean
	category: { slug: string; _id: string }
	chanel: boolean
	content: string
	country: string
	date: string
	img: string
	important_dates: boolean
	main: boolean
	post_date: string
	slider: boolean
	slug: string
	status: boolean
	subcategory: null
	telegram: boolean
	time: string
	title: string
	translates: string[]
	views: string
	__v: string
	_id: string
}

export interface N {
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
