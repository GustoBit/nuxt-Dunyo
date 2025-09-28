<script setup lang="ts">
const model = defineModel<string>()
const inputRef = ref<HTMLInputElement | null>(null)

defineProps<{
	name: string
	placeholder: string
	error: boolean
	type: 'text' | 'email'
	autocomplete?: 'email' | 'username' | 'current-password' | 'new-password' | 'off'
}>()

const handleFocus = () => {
	nextTick(() => {
		inputRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
	})
}
</script>

<template>
	<input
		:id="name"
		ref="inputRef"
		v-model="model"
		:placeholder="$t(`${placeholder}`)"
		:type="type"
		:autocomplete="autocomplete"
		:class="['w-full p-2 lg:p-4 rounded-lg placeholder:gray200 placeholder:text-base lg:placeholder:text-xl regular text-lg lg:text-xl border-0 outline-none ring-1 ring-inset focus:ring-2 focus:ring-blue600', error ? 'ring-red-500' : 'ring-white600 dark:ring-gray-500/20']"
		@focus="handleFocus"
	/>
</template>
