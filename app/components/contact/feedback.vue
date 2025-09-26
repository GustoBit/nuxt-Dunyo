<script setup lang="ts">
const data = ref({
	name: '',
	email: '',
	message: '',
})
</script>

<template>
	<div class="flex flex-col gap-6 lg:gap-8">
		<h1 class="semibold text-3xl lg:text-[36px]">{{ $t('feedback') }}</h1>
		<div class="space-y-4">
			<UiInput
				v-model="data.name"
				name="name"
				type="text"
				placeholder="name"
				autocomplete="off"
				:error="false"
			/>
			<UiInput
				v-model="data.email"
				name="email"
				type="email"
				placeholder="email"
				autocomplete="off"
				:error="false"
			/>
			<UiTextarea
				v-model="data.message"
				name="message"
				placeholder="message"
				autocomplete="off"
				:error="false"
			/>
		</div>

		<button class="mt-auto w-full bg-blue900 rounded-lg text-center p-2 lg:p-4 regular text-lg lg:text-xl text-white900 xl:hover:bg-blue600 active:bg-blue600">{{ $t('sendFeedback') }}</button>
	</div>
</template>
