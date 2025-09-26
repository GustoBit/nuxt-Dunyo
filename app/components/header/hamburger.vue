<script setup lang="ts">
import { useDrawerStore } from '~/store/ui/drawer'
const drawerStore = useDrawerStore()
const { open } = storeToRefs(drawerStore)
</script>

<template>
	<ModalDrawerMobile>
		<div class="">Routing</div>
	</ModalDrawerMobile>

	<button
		class="w-10 h-10 cursor-pointer p-1 xl:hover:bg-white600 xl:dark:hover:bg-gray-500/20 dark:active:bg-gray-500/20 active:bg-white600 rounded-lg"
		@click="drawerStore.setOpen()"
	>
		<UIcon
			:name="open ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition'"
			class="w-full h-full"
		/>
	</button>
</template>
