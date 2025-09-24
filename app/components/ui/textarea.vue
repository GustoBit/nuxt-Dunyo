<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
	name: string
	placeholder: string
	error: boolean
	autocomplete?: 'email' | 'username' | 'current-password' | 'new-password' | 'off'
}>()

// const rowsCount = computed(() => {
// 	if (window.innerWidth < 768) return 5
// 	return 10
// })
</script>

<template>
	<textarea
		:id="name"
		v-model="model"
		:placeholder="$t(`${placeholder}`)"
		:autocomplete="autocomplete"
		:class="['w-full block p-2 lg:p-4 rounded-lg placeholder:gray200 placeholder:text-base lg:placeholder:text-xl regular text-lg lg:text-xl border-0 outline-none ring-1 ring-inset focus:ring-2 focus:ring-blue600 resize-none h-[180px] lg:h-[333px]', error ? 'ring-red-500' : 'ring-white600']"
	/>
</template>
