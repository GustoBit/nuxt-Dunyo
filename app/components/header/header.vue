<script setup lang="ts">
import { useSearchModalStore } from '~/store/ui/search'
const searchStore = useSearchModalStore()

const isScrolled = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 0
}

onMounted(() => {
	handleScroll()
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<header class="mb-5 xl:mb-9 sticky top-0 z-50 bg-gradient-to-b from-white900 via-white900/90 to-white900/80 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800/80">
		<div :class="['relative py-2', isScrolled ? 'xl:pt-2 shadow' : 'xl:pt-8', 'transition-all duration-300 ease-in-out']">
			<div class="container relative z-50">
				<div class="flex items-center">
					<NuxtLink
						:to="$localePath('/')"
						class="w-[169px] h-[44px] block"
					>
						<NuxtImg
							src="/logo.svg"
							alt="Logo"
							class="img dark:brightness-0 dark:invert-100"
						/>
					</NuxtLink>

					<HeaderSearch />

					<div class="flex items-center gap-2 sm:gap-3 ml-auto">
						<button
							type="button"
							class="flex items-center justify-center w-11 h-11 border border-white600 dark:border-gray-500/20 dark:active:bg-gray-500/20 rounded-lg p-1 active:bg-white600 xl:hidden"
							@click="searchStore.setShow(true)"
						>
							<UIcon
								name="simple-line-icons:magnifier"
								class="!h-5 !w-5 text-gray400"
								aria-hidden="true"
							/>
						</button>

						<NuxtLink
							:to="$localePath('/contacts')"
							class="hidden lg:block bg-blue900 xl:hover:bg-blue600 rounded-lg py-[12px] w-[162px] cursor-pointer"
						>
							<p class="text-white900 medium text-lg leading-[100%] text-center">{{ $t('contacts') }}</p>
						</NuxtLink>

						<div class="hidden lg:block">
							<HeaderColor />
						</div>
						<HeaderLanguage />

						<HeaderHamburger />
					</div>
				</div>
			</div>

			<ModalDrawer :is-scrolled="isScrolled" />
		</div>
	</header>
</template>
