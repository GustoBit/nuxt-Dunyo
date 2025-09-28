<script setup lang="ts">
import { useDrawerStore } from '~/store/ui/drawer'
import { useCategoryStore } from '~/store/data/category'
const categoryStore = useCategoryStore()

const { hasSub } = storeToRefs(categoryStore)

const drawerStore = useDrawerStore()
const { open } = storeToRefs(drawerStore)

defineProps<{
	isScrolled: boolean
}>()
</script>

<template>
	<div
		:style="{
			'--header-height': isScrolled ? '70px' : '94px',
		}"
		:class="['hidden overflow-hidden lg:block absolute z-40 w-full transform transition-all duration-300 ease-out', `h-[calc(100dvh-62px)] xl:h-[calc(100dvh-var(--header-height))] `, open ? 'translate-y-0 top-full' : '-translate-y-full top-0']"
	>
		<div class="h-full bg-gradient-to-b from-white via-white/95 to-white dark:from-gray-800/80 dark:via-gray-800/90 dark:to-gray-800">
			<div class="py-5 xl:py-10 h-full overflow-auto">
				<div class="container">
					<div class="columns-2 gap-4 md:columns-3 lg:columns-4">
						<div
							v-for="item in hasSub"
							:key="item._id"
							class="bg-gray-50 dark:bg-gray-700 rounded-xl p-2 xl:p-4 xl:py-6 mb-4 break-inside-avoid"
						>
							<div class="space-y-3 xl:flex-1 order-1 sm:order-none">
								<h1 class="medium text-xl leading-[100%] px-2 text-wrap">
									{{ item.title }}
								</h1>
								<div class="space-y-1.5">
									<NuxtLink
										v-for="(link, index) in item.subs"
										:key="index"
										class="block rounded-lg px-2 py-1.5 regular leading-5 text-gray300 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500/20"
										:to="$localePath(`/category/${link.slug}`)"
										@click="drawerStore.setOpen()"
									>
										{{ link.title }}
									</NuxtLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
