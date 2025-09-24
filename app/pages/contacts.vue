<script setup lang="ts">
definePageMeta({
	title: 'contacts',
})
</script>

<template>
	<div class="container">
		<UiNav />
		<ContactHero />
		<UiAds
			:style="`h-[180px] lg:h-[263px]`"
			position-btn="26"
		/>
	</div>
</template>
