<script setup lang="ts">
import { nav } from '@/link/nav'
const { locale } = useI18n()
</script>

<template>
	<div class="hidden xl:block mb-10 lg:mb-14">
		<div class="flex items-center justify-between">
			<NuxtLink
				v-for="item in nav"
				:key="item.id"
				:to="$localePath(`/${item.to}`)"
				:class="['text-gray200 regular text-xl xl:hover:text-blue800 active:text-blue800']"
			>
				{{ item.name?.[locale] }}
			</NuxtLink>
		</div>
	</div>
</template>
