<script setup lang="ts">
import ads from '@/assets/img/ads1.jpg'
const props = defineProps<{
	style: string
	// img: string
	positionBtn: '16' | '26'
}>()

const emit = defineEmits<{
	(e: 'clickIn'): void
}>()

const click = () => {
	emit('clickIn')
}

const position = computed(() => {
	if (props.positionBtn == '26') {
		return 'left-3 top-3 lg:left-8 lg:top-8'
	}
	if (props.positionBtn == '16') {
		return 'left-3 top-3 lg:left-4 lg:top-4'
	}
	return ''
})
</script>

<template>
	<div
		v-if="useAds()"
		:class="['overflow-hidden rounded-xl relative', style]"
	>
		<img
			:src="ads"
			alt=""
			class="img pointer-events-none"
		/>
		<button
			:class="['cursor-pointer absolute bg-yellow500 rounded-[50px] py-2 px-[26px] xl:hover:bg-yellow500/90 active:bg-yellow500/90', position]"
			@click="click()"
		>
			<p class="text-black800 medium text-xl lg:text-2xl">Ads</p>
		</button>
	</div>
</template>
