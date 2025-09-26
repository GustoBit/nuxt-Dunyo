<script setup lang="ts">
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useSearchStore } from '~/store/ui/search'
import type { SearchItem } from '~/interface/interface'

const store = useSearchStore()
const { show } = storeToRefs(store)

const items = [
	{
		id: 1,
		name: 'Homes',
		description: 'Add freeform text with basic formatting options.',
		url: 'home',
		icon: 'heroicons:home',
	},
	{
		id: 2,
		name: 'Departments',
		description: 'Add freeform text with basic formatting options.',
		url: 'department',
		icon: 'heroicons:building-library',
	},
	{
		id: 3,
		name: 'Users',
		description: 'Add freeform text with basic formatting options.',
		url: 'users',
		icon: 'heroicons:users',
	},
	{
		id: 4,
		name: 'Languages',
		description: 'Add freeform text with basic formatting options.',
		url: 'language',
		icon: 'heroicons:language',
	},
	{
		id: 5,
		name: 'Themes',
		description: 'Add freeform text with basic formatting options.',
		url: 'theme',
		icon: 'heroicons:sun',
	},
]

const query = ref('')
const filteredItems = computed(() =>
	query.value === ''
		? []
		: items.filter((item) => {
				return item.name.toLowerCase().includes(query.value.toLowerCase())
			})
)

const router = useRouter()

const onSelect = (item: SearchItem): void => {
	store.setShow(false)
	router.push({ name: item.url })
}
</script>

<template>
	<TransitionRoot
		:show="show"
		as="template"
		appear
		@after-leave="query = ''"
	>
		<Dialog
			as="div"
			class="relative z-[9999]"
			@close="store.setShow(false)"
		>
			<TransitionChild
				as="template"
				enter="ease-out duration-300"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="ease-in duration-200"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity" />
			</TransitionChild>

			<div class="fixed inset-0 z-10 overflow-y-auto p-4 2xl:pt-24">
				<TransitionChild
					as="template"
					enter="ease-out duration-300"
					enter-from="opacity-0 scale-95"
					enter-to="opacity-100 scale-100"
					leave="ease-in duration-200"
					leave-from="opacity-100 scale-100"
					leave-to="opacity-0 scale-95"
				>
					<DialogPanel :class="['mx-auto max-w-6xl transform divide-y divide-white600 dark:divide-gray-500/20 overflow-hidden rounded-xl shadow-2xl ring-1 ring-white600 dark:ring-gray-500/20 ring-opacity-5 transition-all bg-white900 dark:bg-gray-700']">
						<Combobox @update:model-value="onSelect">
							<div class="relative">
								<UIcon
									name="simple-line-icons:magnifier"
									class="pointer-events-none absolute left-4 transform -translate-y-1/2 top-1/2 h-5 w-5 text-gray400"
									aria-hidden="true"
								/>
								<ComboboxInput
									class="h-12 w-full pl-11 pr-4 focus:outline-none focus:shadow-md placeholder:text-gray100 text-lg regular"
									:placeholder="$t('search')"
									autocomplete="off"
									@change="query = $event.target.value"
								/>
							</div>

							<ComboboxOptions
								v-if="filteredItems.length > 0"
								static
								class="max-h-[500px] scroll-py-3 overflow-y-auto p-3"
							>
								<ComboboxOption
									v-for="item in filteredItems"
									v-slot="{ active }"
									:key="item.id"
									:value="item"
									as="template"
								>
									<li :class="['flex cursor-pointer select-none rounded-xl p-3', active && 'bg-gray-100 dark:bg-gray-500/20']">
										<div :class="['flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-500']">
											<UIcon
												:name="item.icon"
												class="!h-6 !w-6 text-white"
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
								class="px-6 py-14 text-center sm:px-14"
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
					</DialogPanel>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
