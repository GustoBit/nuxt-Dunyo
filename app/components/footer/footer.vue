<script setup lang="ts">
import { useCategoryStore } from '~/store/data/category'
const categoryStore = useCategoryStore()
const { hasSub } = storeToRefs(categoryStore)

const loading = useLoading()

const getData = async () => {
	loading.start()
	await categoryStore.get()
	console.log(hasSub.value)

	loading.finish()
}

onMounted(() => {
	getData()
})
</script>

<template>
	<div class="bg-white700 dark:bg-gray-700 py-14 rounded-t-3xl lg:rounded-t-[50px] mt-14 lg:mt-[72px] bg-[url(/background.svg)] bg-center bg-no-repeat bg-cover">
		<footer class="container">
			<div class="relative pb-20 xl:pb-0">
				<div class="grid xl:grid-cols-[auto_900px] gap-16 lg:gap-[100px]">
					<div class="flex items-center justify-between xl:block xl:space-y-[26px]">
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

						<div class="text-gray300 dark:text-white500 medium hidden lg:block lg:max-w-[300px] xl:max-w-none">Initial reports confirm minor injuries; police and investigating the cause.</div>

						<UiSocial />
					</div>

					<div class="grid grid-cols-1 gap-12 pl-5 sm:pl-0 sm:grid-cols-[1fr_220px] sm:gap-14">
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 flex-1 xl:flex-none order-2 sm:order-none">
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'novosti')"
								:key="value._id"
								class="space-y-4"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-4">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'mezhdunarodnaya-arena')"
								:key="value._id"
								class="space-y-4"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-4">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'diplomatiya')"
								:key="value._id"
								class="space-y-4"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-4">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'ekonomika')"
								:key="value._id"
								class="space-y-4"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-4">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'sootechestvenniki')"
								:key="value._id"
								class="space-y-4"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-4">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
							<div
								v-for="value in hasSub.filter((l) => l.slug == 'archive')"
								:key="value._id"
								class="space-y-4"
							>
								<h1 class="medium text-xl leading-[100%] text-wrap">{{ value.title }}</h1>
								<div class="space-y-4">
									<NuxtLink
										v-for="l in value.subs"
										:key="l._id"
										class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
										:to="$localePath(`/category/${l.slug}`)"
									>
										{{ l.title }}
									</NuxtLink>
								</div>
							</div>
						</div>

						<div
							v-for="item in hasSub.filter((l) => l.slug == 'uzbekistan-segodnya')"
							:key="item._id"
							class="space-y-4 xl:flex-1 order-1 sm:order-none"
						>
							<h1 class="medium text-xl leading-[100%] text-wrap">{{ item.title }}</h1>
							<div class="space-y-4">
								<NuxtLink
									v-for="(link, index) in item.subs"
									:key="index"
									class="block w-fit text-gray300 regular leading-[100%] xl:hover:text-black900 active:text-black900 dark:text-gray-300/80 xl:dark:hover:text-white900 dark:active:text-white900"
									:to="$localePath(`/category/${link.slug}`)"
								>
									{{ link.title }}
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
