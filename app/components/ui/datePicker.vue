<script setup lang="ts">
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import { locales } from '~~/i18n/datepicker/locales'
import type { CustomLocale } from 'flatpickr/dist/types/locale'

const { locale } = useI18n()

const model = defineModel<string>()

const inputEl = ref<HTMLInputElement | null>(null)

let picker: flatpickr.Instance | null = null

const setDatepicker = () => {
	const loc = locales[locale.value as keyof typeof locales] as Partial<CustomLocale>

	if (inputEl.value) {
		picker = flatpickr(inputEl.value, {
			dateFormat: 'd-m-Y',
			locale: loc,
			defaultDate: model.value,
			disableMobile: true,
			onChange: (selectedDates) => {
				model.value = selectedDates[0] ? selectedDates[0].toISOString() : ''
			},
		})
	}
}

// lifecycle
onMounted(() => {
	setDatepicker()
})
onBeforeUnmount(() => {
	if (picker) picker.destroy()
})
</script>

<template>
	<div class="relative">
		<input
			ref="inputEl"
			v-model="model"
			type="text"
			class="w-full p-2 lg:p-4 rounded-lg placeholder:gray200 placeholder:text-base lg:placeholder:text-xl regular text-lg lg:text-xl border-0 outline-none ring-1 ring-inset focus:ring-2 focus:ring-blue600 ring-white600 dark:ring-gray-500/20"
			placeholder="dd-mm-yyyy"
		/>
		<UIcon
			name="line-md:calendar"
			class="w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-4 pointer-events-none dark:text-gray-700 text-gray600"
		/>
	</div>
</template>
