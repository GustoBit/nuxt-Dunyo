<script setup lang="ts">
import { useDrawerStore } from '~/store/ui/drawer'
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
		:class="['hidden lg:block absolute z-40 w-full transform transition-all duration-300 ease-out', `h-[calc(100dvh-62px)] xl:h-[calc(100dvh-var(--header-height))]`, open ? 'translate-y-0 top-full' : '-translate-y-full top-0']"
	>
		<div class="h-full bg-gradient-to-b from-white900/80 via-white900/90 to-white900">
			<div class="container h-full">
				<div class="flex flex-col justify-between h-full py-10">
					<div class="grid grid-cols-[1fr_2fr_1fr] gap-5">
						<div class="bg-gray-200 rounded-xl p-4 h-96">Router</div>
						<div class="bg-gray-200 rounded-xl p-4 h-96">Routing</div>
						<div class="bg-gray-200 rounded-xl p-4 h-96">Contacts</div>
					</div>

					<div class="px-5">Quick Links</div>
				</div>
			</div>
		</div>
	</div>
</template>
