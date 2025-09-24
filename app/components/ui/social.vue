<script setup lang="ts">
import instagram from '@/assets/img/instagram.svg'
import facebook from '@/assets/img/facebook.svg'
import telegram from '@/assets/img/telegram.svg'

interface Social {
	url: string
	img: string
	name: string
}

const nav = ref<Social[]>([
	{ url: '', img: instagram, name: 'Instagram' },
	{ url: '', img: facebook, name: 'Facebook' },
	{ url: '', img: telegram, name: 'Telegram' },
	{ url: '', img: instagram, name: 'Instagram' },
])
</script>

<template>
	<div class="flex items-center gap-3">
		<a
			v-for="(item, index) in nav"
			:key="item.name + index"
			:href="item.url"
			target="_blank"
			rel="noopener noreferrer"
			class="w-8 h-8 rounded-lg flex items-center justify-center border border-white600 xl:hover:bg-white600 active:bg-white600"
		>
			<img
				:src="item.img"
				class="w-5 h-5 object-cover object-center"
			/>
		</a>
	</div>
</template>
