<!-- <script setup lang="ts">
import { useCategoryStore } from '~/store/data/category'
import { useDrawerStore } from '~/store/ui/drawer'

const categoryStore = useCategoryStore()
const { hasSub } = storeToRefs(categoryStore)

const drawerStore = useDrawerStore()

const show = ref<boolean[]>([])
const contentHeights = ref<number[]>([])
const contentRefs = ref<HTMLElement[]>([])

watch(
	() => hasSub.value,
	(newArray) => {
		show.value = newArray.map(() => false)
		contentHeights.value = newArray.map(() => 0)
	},
	{ immediate: true }
)

const toggle = (index: number): void => {
	show.value[index] = !show.value[index]

	if (show.value[index]) {
		const element = contentRefs.value[index]
		contentHeights.value[index] = element?.scrollHeight || 0

		nextTick(() => {
			element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		})
	} else {
		contentHeights.value[index] = 0
	}
}
</script>

<template>
	<div class="space-y-4">
		<div
			v-for="(item, index) in hasSub"
			:key="index"
			class="flex flex-col"
		>
			<div class="grid grid-cols-[2fr_1fr] divide-x-2 dark:divide-gray-400/30 divide-gray-400/20 bg-gray-200 rounded-lg overflow-hidden dark:bg-gray-500/20">
				<NuxtLink
					:to="$localePath(`/category/${item.slug}`)"
					class="text-xl semibold px-2 p-2 flex items-center active:bg-gray-500/20"
					@click="drawerStore.setOpen()"
				>
					<p>{{ item.title }}</p>
				</NuxtLink>

				<button
					class="flex items-center justify-end p-2 w-full active:bg-gray-500/20"
					@click="toggle(index)"
				>
					<UIcon
						name="line-md:chevron-small-right"
						:class="['w-8 h-8 transition duration-300 ease-in-out', show[index] ? 'rotate-90' : '']"
					/>
				</button>
			</div>

			<div
				ref="contentRefs"
				:class="['overflow-hidden transition-all duration-300 ease-in-out pl-2 pr-4', show[index] ? 'mt-6' : '']"
				:style="{ maxHeight: show[index] ? contentHeights[index] + 'px' : '0px' }"
			>
				<div class="flex gap-3 justify-between">
					<div class="flex-1 space-y-2">
						<NuxtLink
							v-for="v in item.subs"
							:key="v._id"
							:to="$localePath(`/category/${v.slug}`)"
							class="block px-2 py-1 text-lg medium rounded-lg active:bg-gray-100 dark:active:bg-gray-500/20"
						>
							{{ v.title }}
						</NuxtLink>
					</div>

					<div class="w-0.5 dark:bg-gray-800 bg-gray-500/20" />
				</div>
			</div>
		</div>
	</div>
</template> -->

<!-- BITTASI OCHILADIGANI TEPADAGI HOHLAGANCHA OCHADIGANI -->
<script setup lang="ts">
import { useCategoryStore } from '~/store/data/category'
import { useDrawerStore } from '~/store/ui/drawer'

const categoryStore = useCategoryStore()
const { hasSub } = storeToRefs(categoryStore)

const normalizedHasSub = computed(() => {
	if (!hasSub.value.length) return []

	const reorderedHasSub = [...hasSub.value.slice(1), hasSub.value[0]]

	return reorderedHasSub.map((cat) => {
		if (!cat?.subs || !cat.subs.length) {
			return {
				...cat,
				subs: [{ slug: cat?.slug, title: cat?.title, _id: cat?._id }],
			}
		}

		const [first, ...rest] = cat.subs

		return {
			...cat,
			subs: [{ slug: cat.slug, title: cat.title, _id: cat._id }, ...rest, first],
		}
	})
})

const drawerStore = useDrawerStore()

const activeIndex = ref<number | null>(null)
const contentRefs = ref<HTMLElement[]>([])

const toggle = (index: number): void => {
	if (activeIndex.value === index) {
		activeIndex.value = null
	} else {
		activeIndex.value = index
	}

	nextTick(() => {
		if (activeIndex.value !== null) {
			const element = contentRefs.value[activeIndex.value]
			element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
		}
	})
}
</script>

<template>
	<div class="space-y-2">
		<div
			v-for="(item, index) in normalizedHasSub"
			:key="index"
			class="flex flex-col"
		>
			<button
				:class="['flex items-center justify-between gap-2 p-2 rounded-lg active:bg-gray-500/20', activeIndex == index ? 'dark:bg-gray-500/20 bg-gray-200' : '']"
				@click="toggle(index)"
			>
				<h1 class="text-xl semibold flex items-center">
					{{ item.title }}
				</h1>

				<span class="flex items-center justify-center">
					<UIcon
						name="line-md:chevron-small-right"
						:class="['w-8 h-8 transition duration-300 ease-in-out', activeIndex === index ? 'rotate-90' : '']"
					/>
				</span>
			</button>

			<div
				ref="contentRefs"
				:class="['overflow-hidden transition-all duration-300 ease-in-out pl-2 pr-4', activeIndex === index ? 'mt-2' : '']"
				:style="{
					maxHeight: activeIndex === index ? (contentRefs[index]?.scrollHeight || 0) + 'px' : '0px',
				}"
			>
				<div class="flex gap-3 justify-between">
					<div class="flex-1 space-y-2">
						<NuxtLink
							v-for="v in item.subs"
							:key="v?._id"
							:to="$localePath(`/category/${v?.slug}`)"
							class="block px-2 py-1 text-lg medium rounded-lg active:bg-gray-100 dark:active:bg-gray-500/20"
							@click="drawerStore.setOpen()"
						>
							{{ v?.title }}
						</NuxtLink>
					</div>

					<div class="w-0.5 dark:bg-gray-500/20 bg-gray-400/20" />
				</div>
			</div>
		</div>
	</div>
</template>
