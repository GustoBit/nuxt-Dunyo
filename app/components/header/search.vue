<script setup lang="ts">
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue'
import type { Search } from '~/interface/interface'
import { useSearchStore } from '~/store/data/search'
const searchStore = useSearchStore()
const { data } = storeToRefs(searchStore)

const query = ref('')

const getData = async () => {
	searchStore.get(query.value)
}

watch(query, (newVal) => {
	searchStore.get(newVal)
})

onMounted(() => {
	getData()
})

const filteredItems = computed(() =>
	query.value === ''
		? []
		: data.value.filter((item) => {
				return item.title.toLowerCase().includes(query.value.toLowerCase())
			})
)
watch(query, (newVal) => {
	query.value = newVal
})

const router = useRouter()
const localePath = useLocalePath()
const onSelect = (item: Search): void => {
	if (!item) return
	router.push(localePath(`/news-details/${item.slug || 'de'}`))
}

const isDropdownOpen = computed(() => {
	return query.value !== '' && (filteredItems.value.length > 0 || filteredItems.value.length === 0)
})
</script>

<template>
	<div
		class="hidden xl:block relative flex-1 ml-9 mr-[26px]"
		@focusout="query = ''"
	>
		<Combobox @update:model-value="onSelect">
			<div class="relative">
				<UIcon
					name="simple-line-icons:magnifier"
					class="pointer-events-none absolute left-4 transform -translate-y-1/2 top-1/2 h-6 w-6 text-gray400"
					aria-hidden="true"
				/>
				<ComboboxInput
					v-model="query"
					:class="['w-full border-[1.5px] border-white600 dark:border-gray-500/20 pl-[45px] p-3 text-lg regular', isDropdownOpen ? 'rounded-b-0 rounded-t-3xl' : 'rounded-[30px]', 'focus:outline-none focus:shadow-md', 'placeholder:text-gray100']"
					:placeholder="$t('search')"
					autocomplete="off"
					@change="query = $event.target.value"
				/>
				<button
					:class="['absolute transform top-1/2 -translate-y-1/2 right-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-500/20 transition duration-200 ease-in-out', query.length > 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']"
					@click="query = ''"
				>
					<UIcon
						name="line-md:menu-to-close-transition"
						class="w-5 h-5"
					/>
				</button>
			</div>

			<ComboboxOptions
				v-if="filteredItems.length > 0"
				static
				class="max-h-[500px] scroll-py-3 overflow-y-auto p-3 absolute top-full left-0 right-0 shadow-xl rounded-b-[30px] bg-gradient-to-b from-white900/80 via-white900/90 to-white900 dark:from-gray-800/80 dark:via-gray-800/90 dark:to-gray-800"
			>
				<ComboboxOption
					v-for="item in filteredItems"
					v-slot="{ active }"
					:key="item._id"
					:value="item"
					as="template"
				>
					<li :class="['flex cursor-pointer select-none rounded-xl p-3', active && 'bg-gray-200 dark:bg-gray-500/20']">
						<div class="flex-auto">
							<p class="medium text-xl">
								{{ item.title }}
							</p>
						</div>
					</li>
				</ComboboxOption>
			</ComboboxOptions>

			<div
				v-if="query !== '' && filteredItems.length === 0"
				class="px-6 py-14 text-center text-sm sm:px-14 absolute top-full left-0 right-0 shadow-xl rounded-b-[30px] bg-gradient-to-b from-white900/80 via-white900/90 to-white900 dark:from-gray-800/80 dark:via-gray-800/90 dark:to-gray-800"
			>
				<UIcon
					name="heroicons-outline:exclaimation-triangle"
					class="mx-auto !w-10 !h-10 text-red-500"
				/>
				<p class="mt-4 text-xl semibold">
					{{ $t('no_result') }}
				</p>
				<p class="mt-2 text-gray-400 regular">
					{{ $t('no_result_text') }}
				</p>
			</div>
		</Combobox>
	</div>
</template>
