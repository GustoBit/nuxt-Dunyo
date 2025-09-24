<script setup lang="ts">
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption } from '@headlessui/vue'
import type { SearchItem } from '~/interface/interface'

const items = [
	{
		id: 1,
		name: 'Homes',
		description: 'Add freeform text with basic formatting options.',
		url: '',
		icon: 'heroicons:home',
	},
	{
		id: 2,
		name: 'Departments',
		description: 'Add freeform text with basic formatting options.',
		url: '',
		icon: 'heroicons:building-library',
	},
	{
		id: 3,
		name: 'Users',
		description: 'Add freeform text with basic formatting options.',
		url: '',
		icon: 'heroicons:users',
	},
	{
		id: 4,
		name: 'Languages',
		description: 'Add freeform text with basic formatting options.',
		url: '',
		icon: 'heroicons:language',
	},
	{
		id: 5,
		name: 'Themes',
		description: 'Add freeform text with basic formatting options.',
		url: '',
		icon: 'heroicons:sun',
	},
]

const search = ref('')
const query = ref('')
const filteredItems = computed(() =>
	query.value === ''
		? []
		: items.filter((item) => {
				return item.name.toLowerCase().includes(query.value.toLowerCase())
			})
)
watch(query, (newVal) => {
	query.value = newVal
})

const router = useRouter()

const onSelect = (item: SearchItem): void => {
	router.push({ name: item.url })
}

const isDropdownOpen = computed(() => {
	return filteredItems.value.length > 0 || (query.value !== '' && filteredItems.value.length === 0)
})
</script>

<template>
	<div class="hidden xl:block relative flex-1 ml-9 mr-[26px]">
		<Combobox @update:model-value="onSelect">
			<div class="relative">
				<UIcon
					name="simple-line-icons:magnifier"
					class="pointer-events-none absolute left-4 transform -translate-y-1/2 top-1/2 h-6 w-6 text-gray400"
					aria-hidden="true"
				/>
				<ComboboxInput
					v-model="search"
					:class="['w-full border-[1.5px] border-white600 pl-[45px] p-3 text-lg regular', isDropdownOpen ? 'rounded-b-0 rounded-t-3xl' : 'rounded-[30px]', 'focus:outline-none focus:shadow-md', 'placeholder:text-gray100']"
					:placeholder="$t('search')"
					autocomplete="off"
					@change="query = $event.target.value"
				/>
			</div>

			<ComboboxOptions
				v-if="filteredItems.length > 0"
				static
				class="max-h-[500px] scroll-py-3 overflow-y-auto p-3 absolute top-full left-0 right-0 bg-white800 shadow-xl rounded-b-[30px]"
			>
				<ComboboxOption
					v-for="item in filteredItems"
					v-slot="{ active }"
					:key="item.id"
					:value="item"
					as="template"
				>
					<li :class="['flex cursor-pointer select-none rounded-xl p-3', active && 'bg-gray-100']">
						<div :class="['flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-500']">
							<UIcon
								:name="item.icon"
								class="h-6 w-6 text-white"
								aria-hidden="true"
							/>
						</div>
						<div class="ml-4 flex-auto">
							<p class="text-sm im">
								{{ item.name }}
							</p>
							<p class="text-sm ir">
								{{ item.description }}
							</p>
						</div>
					</li>
				</ComboboxOption>
			</ComboboxOptions>

			<div
				v-if="query !== '' && filteredItems.length === 0"
				class="px-6 py-14 text-center text-sm sm:px-14 absolute top-full left-0 right-0 bg-white800 shadow-xl rounded-b-[30px]"
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
