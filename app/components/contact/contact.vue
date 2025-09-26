<script setup lang="ts">
const src = ref<string>('https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7109.9022163928985!2d69.257234!3d41.310405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b33541b14d3%3A0xc3f1fa43b817208f!2sMinistry%20of%20Foreign%20Affairs!5e1!3m2!1sen!2sus!4v1758862008642!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade')

const links = ref([
	{
		id: '1',
		name: '+99871-239-17-76',
		to: 'tel:',
		icon: 'solar:phone-bold',
	},
	{
		id: '2',
		name: 'Dunyo@mfa.uz',
		to: 'mailto:',
		icon: 'heroicons:envelope-16-solid',
	},
	{
		id: '3',
		name: '4, Amir Temur str., Tashkent, 100066',
		to: '',
		icon: 'heroicons:map-pin-solid',
	},
])
</script>

<template>
	<div class="space-y-6 lg:space-y-8">
		<h1 class="semibold text-3xl lg:text-[36px]">{{ $t('contacts') }}</h1>

		<div class="space-y-6 lg:space-y-8">
			<a
				v-for="item in links"
				:key="item.id"
				:href="`${item.to}${item.name}`"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 lg:gap-4 w-fit group"
			>
				<span class="bg-[#EFF0F2] dark:bg-gray-500/20 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center">
					<UIcon
						:name="item.icon"
						class="w-5 h-5 lg:w-8 lg:h-8 text-blue900 dark:text-white800 xl:dark:group-hover:text-gray-300 dark:group-active:text-blue900"
					/>
				</span>
				<p class="flex-1 text-gray200 regular text-lg lg:text-xl xl:group-hover:text-blue900 group-active:text-blue900 dark:text-white800 xl:dark:group-hover:text-gray-300 dark:group-active:text-gray-300">{{ item.name }}</p>
			</a>
		</div>

		<div class="h-[313px] overflow-hidden rounded-2xl">
			<iframe
				:src="src"
				width="100%"
				height="100%"
				allowfullscreen="false"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
		</div>
	</div>
</template>
