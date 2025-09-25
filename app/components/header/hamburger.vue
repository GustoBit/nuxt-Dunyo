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
		class="w-11 h-11 xl:w-8 xl:h-8 cursor-pointer p-1 xl:hover:bg-white600 active:bg-white600 rounded-lg"
		@click="drawerStore.setOpen()"
	>
		<UIcon
			:name="open ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition'"
			class="text-black900 !w-full !h-full"
		/>
	</button>
</template>
