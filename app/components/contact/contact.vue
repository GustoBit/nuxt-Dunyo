<script setup lang="ts">
const src = ref<string>('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.2032218179206!2d69.16214967643485!3d41.26091090383002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89907057d0e7%3A0x43bf32dd3afb5199!2sUniversity%20of%20Management%20and%20Future%20Technologies!5e0!3m2!1sru!2sde!4v1752814299911!5m2!1sru!2sde')

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
		<h1 class="text-black800 semibold text-3xl lg:text-[36px]">{{ $t('contacts') }}</h1>

		<div class="space-y-6 lg:space-y-8">
			<a
				v-for="item in links"
				:key="item.id"
				:href="`${item.to}${item.name}`"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 lg:gap-4 w-fit group"
			>
				<span class="bg-[#EFF0F2] w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center">
					<UIcon
						:name="item.icon"
						class="w-5 h-5 lg:w-8 lg:h-8 text-blue900"
					/>
				</span>
				<p class="flex-1 text-gray200 regular text-lg lg:text-xl xl:group-hover:text-blue900 group-active:text-blue900">{{ item.name }}</p>
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
