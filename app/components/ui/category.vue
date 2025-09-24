<script setup lang="ts">
defineProps<{
	category: string[]
}>()
</script>

<template>
	<div class="flex items-center gap-4">
		<div
			v-for="(c, i) in category.slice(0, 2)"
			:key="i"
			class="select-none text-blue700 light text-lg"
		>
			{{ c }}
		</div>
	</div>
</template>
