<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useDrawerStore } from '~/store/ui/drawer'
const drawerStore = useDrawerStore()
const { open } = storeToRefs(drawerStore)

const isLg = ref(false)

const checkScreen = () => {
	isLg.value = window.innerWidth < 1024
}

onMounted(() => {
	checkScreen()
	window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
	window.removeEventListener('resize', checkScreen)
})
</script>

<template>
	<TransitionRoot
		v-if="isLg"
		as="template"
		:show="open"
	>
		<Dialog
			as="div"
			class="relative z-50 lg:hidden"
			@close="drawerStore.setOpen()"
		>
			<TransitionChild
				as="template"
				enter="ease-in-out duration-500"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in-out duration-500"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-hidden">
				<div class="absolute inset-0 overflow-hidden">
					<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
						<TransitionChild
							as="template"
							enter="transform transition ease-in-out duration-500"
							enter-from="translate-x-full"
							enter-to="translate-x-0"
							leave="transform transition ease-in-out duration-500"
							leave-from="translate-x-0"
							leave-to="translate-x-full"
						>
							<DialogPanel class="pointer-events-auto w-screen max-w-md bg-white900 dark:bg-gray-700">
								<div class="flex h-full flex-col overflow-y-auto pb-6 shadow-xl">
									<div class="p-2 sm:px-6 sticky z-10 top-0 shadow dark:bg-gray-800 bg-white900">
										<div class="flex items-center justify-between">
											<DialogTitle class="">
												<NuxtLink
													:to="$localePath('/')"
													class="w-[169px] h-[44px] block"
												>
													<img
														src="/logo.svg"
														alt="Logo"
														class="object-contain object-center w-full h-full"
													/>
												</NuxtLink>
											</DialogTitle>

											<div class="ml-3 flex h-7 items-center gap-3">
												<HeaderColor />
												<button
													type="button"
													class="cursor-pointer flex items-center justify-center w-10 h-10 border border-gray-300 dark:border-gray-500/20 rounded-lg p-1 active:bg-gray-200 active:border-gray-200 dark:active:bg-gray-500/20 dark:active:border-gray-500/20"
													@click="drawerStore.setOpen()"
												>
													<span class="sr-only">Close panel</span>
													<UIcon
														name="line-md:menu-to-close-transition"
														class="h-6 w-6 text-white90"
														aria-hidden="true"
													/>
												</button>
											</div>
										</div>
									</div>
									<div class="relative mt-6 flex-1 px-2 sm:px-6 text-white90">
										<slot />
									</div>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
