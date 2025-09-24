<script setup lang="ts">
import { useSearchStore } from '~/store/ui/search'
const searchStore = useSearchStore()

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
	<header :class="['pb-1 mb-5 lg:mb-9 sticky z-50 bg-gradient-to-b from-white900 via-white900/90 to-white900/80 top-0 transition-all duration-300 ease-in-out pt-2', isScrolled ? 'lg:pt-1 shadow' : 'lg:pt-8']">
		<div class="container">
			<div class="flex items-center">
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

				<HeaderSearch />

				<div class="flex items-center gap-2 sm:gap-3 ml-auto">
					<button
						type="button"
						class="flex items-center justify-center w-11 h-11 border border-white600 rounded-lg p-1 active:bg-white600 xl:hidden"
						@click="searchStore.setShow(true)"
					>
						<UIcon
							name="simple-line-icons:magnifier"
							class="!h-5 !w-5 text-gray400"
							aria-hidden="true"
						/>
					</button>

					<HeaderLanguage />

					<NuxtLink
						:to="$localePath('/contacts')"
						class="hidden lg:block bg-blue900 xl:hover:bg-blue600 rounded-lg py-[12.5px] w-[162px] cursor-pointer"
					>
						<p class="text-white900 medium text-lg leading-[100%] text-center">{{ $t('contacts') }}</p>
					</NuxtLink>

					<HeaderHamburger />
				</div>
			</div>
		</div>
	</header>
</template>
