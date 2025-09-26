<script setup lang="ts">
import type { Subs } from '~/interface/interface'
import { useDrawerStore } from '~/store/ui/drawer'
import { useCategoryStore } from '~/store/data/category'
const categoryStore = useCategoryStore()

const { hasSub } = storeToRefs(categoryStore)

const drawerStore = useDrawerStore()
const { open } = storeToRefs(drawerStore)

const archive = ref<Subs[]>([])

const getQuickLinks = computed(() => [archive.value, ...hasSub.value.filter((item) => ['sootechestvenniki', 'archive'].includes(item.slug)).flatMap((item) => item.subs || [])].flat())

defineProps<{
	isScrolled: boolean
}>()
</script>

<template>
	<div
		:style="{
			'--header-height': isScrolled ? '70px' : '94px',
		}"
		:class="['hidden lg:block absolute z-40 w-full transform transition-all duration-300 ease-out', `h-[calc(100dvh-62px)] xl:h-[calc(100dvh-var(--header-height))]`, open ? 'translate-y-0 top-full' : '-translate-y-full top-0']"
	>
		<div class="h-full bg-gradient-to-b from-white900/80 via-white900/90 to-white900 dark:from-gray-800/80 dark:via-gray-800/90 dark:to-gray-800">
			<div class="flex flex-col justify-between h-full py-5 xl:py-10">
				<div class="container h-full">
					<div class="grid grid-cols-[1fr_2fr_1fr] gap-5">
						<div class="bg-gray-200 dark:bg-gray-700 rounded-xl p-2 xl:p-4 h-fit">
							<div
								v-for="item in hasSub.filter((l) => l.slug == 'uzbekistan-segodnya')"
								:key="item._id"
								class="space-y-3 xl:flex-1 order-1 sm:order-none"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ item.title }}</h1>
								<div class="space-y-1.5">
									<NuxtLink
										v-for="(link, index) in item.subs"
										:key="index"
										class="block rounded-lg px-2 py-1.5 regular leading-[100%] text-gray300 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500/20"
										:to="$localePath(`/category/${link.slug}`)"
									>
										{{ link.title }}
									</NuxtLink>
								</div>
							</div>
						</div>
						<div class="bg-gray-200 dark:bg-gray-700 rounded-xl p-2 xl:p-4 h-fit grid grid-cols-2 gap-5">
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'mezhdunarodnaya-arena')"
								:key="value._id"
								class="space-y-3"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-1.5">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block h-fit rounded-lg px-2 py-1.5 regular leading-[100%] text-gray300 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500/20"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>

							<div
								v-for="value in hasSub.filter((l) => l.slug == 'diplomatiya')"
								:key="value._id"
								class="space-y-3"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-1.5">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block h-fit rounded-lg px-2 py-1.5 regular leading-[100%] text-gray300 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500/20"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
						</div>
						<div class="bg-gray-200 dark:bg-gray-700 rounded-xl p-2 xl:p-4 h-fit">
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'novosti')"
								:key="value._id"
								class="space-y-3"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-1.5">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block h-fit rounded-lg px-2 py-1.5 regular leading-[100%] text-gray300 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500/20"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ml-5 px-5 pt-4 xl:pt-5 border-t-2 border-gray-300 dark:border-gray-500/20">
					<div class="container">
						<div class="flex items-center gap-4">
							<NuxtLink
								v-for="item in getQuickLinks"
								:key="item._id"
								:to="$localePath(`/category/${item.slug}`)"
								class="rounded-lg px-2 py-1.5 regular leading-[100%] text-gray300 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500/20"
							>
								{{ item.title }}
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
