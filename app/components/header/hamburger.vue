<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDrawerStore } from '~/store/ui/drawer'
import { useCategoryStore } from '~/store/data/category'
import type { Subs } from '~/interface/interface'

const categoryStore = useCategoryStore()
const drawerStore = useDrawerStore()
const { hasSub } = storeToRefs(categoryStore)
const { open } = storeToRefs(drawerStore)

const normalizedHasSub = computed(() => {
	if (!hasSub.value.length) return []

	const reorderedHasSub = [...hasSub.value.slice(1), hasSub.value[0]]

	return reorderedHasSub.map((cat) => {
		if (!cat?.subs || !cat.subs.length) {
			return {
				...cat,
				subs: [
					{
						_id: cat?._id || '',
						__v: cat?.__v || 0,
						title: cat?.title || '',
						status: cat?.status ?? false,
						slug: cat?.slug || '',
						parent: cat?.parent || '',
						main: cat?.main ?? false,
						img: cat?.img || [],
					},
				],
			}
		}

		const [first, ...rest] = cat.subs

		const safeSubs: Subs[] = [
			{
				_id: cat._id || '',
				__v: cat.__v || 0,
				title: cat.title || '',
				status: cat.status ?? false,
				slug: cat.slug || '',
				parent: cat.parent || '',
				main: cat.main ?? false,
				img: cat.img || [],
			},
			...rest.map((s) => ({
				_id: s._id || '',
				__v: s.__v || 0,
				title: s.title || '',
				status: s.status ?? false,
				slug: s.slug || '',
				parent: s.parent || '',
				main: s.main ?? false,
				img: s.img || [],
			})),
			{
				_id: first?._id || '',
				__v: first?.__v || 0,
				title: first?.title || '',
				status: first?.status ?? false,
				slug: first?.slug || '',
				parent: first?.parent || '',
				main: first?.main ?? false,
				img: first?.img || [],
			},
		]

		return {
			...cat,
			subs: safeSubs,
		}
	})
})

const dopDraw = ref<{ show: boolean; data: Subs[] }>({
	show: false,
	data: [],
})

const setDraw = (show: boolean, data: Subs[]) => {
	dopDraw.value = {
		show,
		data,
	}
}

const removeDraw = () => {
	dopDraw.value.show = false
	dopDraw.value.data = []
}

const close = () => {
	drawerStore.setOpen()
	removeDraw()
}

let startX = 0
let currentX = 0
const onTouchStart = (e: TouchEvent) => {
	startX = e?.touches[0]?.clientX || 0
}
const onTouchMove = (e: TouchEvent) => {
	currentX = e?.touches[0]?.clientX || 0
}
const onTouchEnd = () => {
	if (currentX - startX > 50) {
		removeDraw()
	}
	startX = 0
	currentX = 0
}
</script>

<template>
	<ModalDrawerMobile>
		<template #menu>
			<div class="space-y-2">
				<div
					v-for="(item, index) in normalizedHasSub"
					:key="index"
					class="flex items-center justify-between gap-2 p-2 rounded-lg active:bg-gray-500/20"
					@click="setDraw(true, item.subs)"
				>
					<h1 class="text-xl semibold flex items-center">{{ item.title }}</h1>
					<UIcon
						name="line-md:chevron-double-left"
						class="w-8 h-8"
					/>
				</div>
			</div>
		</template>
		<template #absolute>
			<div
				:class="['absolute inset-0 transform transition duration-200', dopDraw.show ? 'translate-x-0' : 'translate-x-full']"
				@touchstart="onTouchStart"
				@touchmove="onTouchMove"
				@touchend="onTouchEnd"
			>
				<div class="flex h-full">
					<div
						class="backdrop-blur p-2"
						@click="dopDraw.show = false"
					>
						<button
							class="cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg p-1 dark:bg-gray-800 bg-gray-300 active:bg-gray-200 dark:active:bg-gray-500/20"
							@click="dopDraw.show = false"
						>
							<UIcon
								name="line-md:chevron-small-double-right"
								class="w-5 h-5"
							/>
						</button>
					</div>
					<div class="flex-1 space-y-2 shadow-2xl h-full dark:bg-gray-700 bg-white900 p-2 overflow-y-auto">
						<NuxtLink
							v-for="item in dopDraw.data"
							:key="item._id"
							:to="$localePath(`/category/${item.slug}`)"
							class="block px-2 py-1.5 rounded-lg active:bg-gray-500/20"
							@click="close()"
						>
							<p class="text-lg semibold">{{ item.title }}</p>
						</NuxtLink>
					</div>
				</div>
			</div>
		</template>
	</ModalDrawerMobile>
	<button
		class="w-10 h-10 cursor-pointer p-1 xl:hover:bg-white600 xl:dark:hover:bg-gray-500/20 dark:active:bg-gray-500/20 active:bg-white600 rounded-lg"
		@click="close()"
	>
		<UIcon
			:name="open ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition'"
			class="w-full h-full"
		/>
	</button>
</template>
