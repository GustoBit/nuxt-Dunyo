<script setup lang="ts">
import { uzbToday, diplomacy, news } from '~/link/footer'

const links = ref([uzbToday, diplomacy, diplomacy, diplomacy, uzbToday, diplomacy])

const { locale } = useI18n()
</script>

<template>
	<div class="bg-white700 dark:bg-gray-700 py-14 rounded-t-3xl lg:rounded-t-[50px] mt-14 lg:mt-[72px] bg-[url(/background.svg)] bg-center bg-no-repeat bg-cover">
		<footer class="w-full max-w-[1260px] sm:mx-auto px-2 sm:px-4 xl:px-0">
			<div class="relative pb-20 xl:pb-0">
				<div class="grid xl:grid-cols-[auto_856px] gap-16 lg:gap-[100px]">
					<div class="flex items-center justify-between xl:block xl:space-y-[26px]">
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

						<div class="text-gray300 dark:text-white500 medium hidden lg:block lg:max-w-[300px] xl:max-w-none">Initial reports confirm minor injuries; police and investigating the cause.</div>

						<UiSocial />
					</div>

					<div class="grid grid-cols-1 gap-12 pl-5 sm:pl-0 sm:grid-cols-[1fr_156px] sm:gap-14">
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 flex-1 xl:flex-none">
							<div
								v-for="(value, idx) in links"
								:key="idx"
							>
								<div
									v-for="item in value"
									:key="item.title.en"
									class="space-y-6"
								>
									<h1 class="medium text-xl leading-[100%] text-wrap">{{ item.title[locale] }}</h1>
									<div class="space-y-4">
										<NuxtLink
											v-for="(link, index) in item.link"
											:key="index"
											class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray600 xl:dark:hover:text-white900 dark:active:text-white900"
											:to="$localePath(`/${link.to}`)"
										>
											{{ link.name[locale] }}
										</NuxtLink>
									</div>
								</div>
							</div>
						</div>

						<div
							v-for="item in news"
							:key="item.title.en"
							class="space-y-6 xl:flex-1"
						>
							<h1 class="medium text-xl leading-[100%] text-wrap">{{ item.title[locale] }}</h1>
							<div class="space-y-4">
								<NuxtLink
									v-for="(link, index) in item.link"
									:key="index"
									class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray600 xl:dark:hover:text-white900 dark:active:text-white900"
									:to="$localePath(`/${link.to}`)"
								>
									{{ link.name[locale] }}
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>

				<div class="absolute left-0 bottom-0 flex items-center gap-2 select-none text-gray300 dark:text-white800 regular leading-[100%]">
					<UIcon
						name="tabler:copyright"
						class="w-4 h-4"
					/>
					<p class="flex-1">Copyright 2025. Dunyo</p>
				</div>
			</div>
		</footer>
	</div>
</template>
