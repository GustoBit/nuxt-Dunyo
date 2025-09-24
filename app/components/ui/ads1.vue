<script setup lang="ts">
import ads1 from '~/assets/img/ads1.jpg'

defineProps<{
	mb: string
}>()
</script>

<template>
	<div :class="['h-[180px] lg:h-[263px] overflow-hidden rounded-xl relative', mb]">
		<img
			:src="ads1"
			alt=""
			class="object-cover object-center w-full h-full pointer-events-none"
		/>
		<button
			type="button"
			class="cursor-pointer absolute left-3 top-3 lg:left-8 lg:top-8 bg-yellow500 rounded-[50px] py-2 px-[26px] xl:hover:bg-yellow500/90 active:bg-yellow500/90"
		>
			<p class="text-black800 medium text-xl lg:text-2xl">Ads</p>
		</button>
	</div>
</template>
