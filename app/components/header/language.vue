<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { locale, locales, setLocale } = useI18n()

const currentLang = computed(() => {
	return locales.value.filter((item) => item.code === locale.value)
})

const otherLang = computed(() => {
	return locales.value.filter((item) => item.code !== locale.value)
})
</script>

<template>
	<Menu
		as="div"
		class="relative block"
	>
		<div>
			<MenuButton
				v-for="lang in currentLang"
				:key="lang.code"
				class="flex items-center gap-2 cursor-pointer w-fit transition duration-300 ease-in-out border border-white600 dark:border-gray-500/20 rounded-lg p-1.5 text-gray300 dark:text-white800 xl:dark:hover:bg-gray-500/20 xl:hover:bg-gray-200 active:dark:bg-gray-500/20 active:bg-gray-200"
			>
				<div class="medium text-xl">{{ lang.name }}</div>
				<UIcon
					name="icons8:angle-down"
					class="!w-5 !h-5"
				/>
			</MenuButton>
		</div>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<MenuItems :class="['absolute left-0 right-0 z-10 mt-1 rounded-md shadow-lg focus:outline-hidden border border-white600 dark:border-gray-500/20 bg-white900 dark:bg-gray-700']">
				<div class="py-1">
					<MenuItem
						v-for="lang in otherLang"
						:key="lang.code"
						v-slot="{ active }"
						@click="setLocale(lang.code)"
					>
						<button :class="[active ? 'bg-gray-100 dark:bg-gray-500/20' : '', 'px-4 py-1.5 w-full cursor-pointer']">
							<p class="medium text-gray300 dark:text-white800 text-xl">{{ lang.name }}</p>
						</button>
					</MenuItem>
				</div>
			</MenuItems>
		</transition>
	</Menu>
</template>
