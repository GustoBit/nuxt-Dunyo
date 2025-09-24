<script setup lang="ts">
import { formatDate2 } from '@/utils/func'

defineProps<{
	img: string
	date: Date
	category: string[]
	description: string
}>()
</script>

<template>
	<div class="space-y-2 xl:space-y-8">
		<div class="h-[320px] sm:h-[480px] lg:h-[520px] xl:h-[621px] overflow-hidden rounded-2xl">
			<img
				:src="img"
				alt=""
				class="img"
			/>
		</div>

		<div class="space-y-[26px]">
			<div class="pb-2 xl:pb-[26px] border-b-2 border-gray500">
				<div class="flex items-center justify-between sm:justify-start sm:gap-5 lg:gap-[26px]">
					<div class="text-gray600 medium text-lg sm:text-2xl">{{ formatDate2(date) }}</div>
					<UiCategory :category="category" />
				</div>
			</div>

			<div class="">{{ description }}</div>
		</div>
	</div>
</template>
