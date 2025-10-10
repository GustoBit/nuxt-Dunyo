<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

const props = defineProps<{
  height?: string;
  width?: string;
  title?: string;
}>();

const elementRef = ref<HTMLElement | null>(null);
const displayWidth = ref<string | number | undefined>();
const isMounted = ref(false); // Флаг для проверки, смонтирован ли компонент

onMounted(() => {
  isMounted.value = true; // Устанавливаем флаг после монтирования
  displayWidth.value = props.width;
  if (!props.width && elementRef.value) {
    displayWidth.value = elementRef.value.offsetWidth;
  }
});

const heightClass = computed(() => {
  if (!props.height) return "h-[200px]";
  if (props.height.startsWith("h-")) return props.height;
  return `h-[${props.height}]`;
});
</script>
<template>
  <div
    ref="elementRef"
    :class="[
      'bg-brand flex items-center justify-center text-white',
      heightClass,
      width ? width : 'w-full',
    ]"
  >
    <!-- Отображаем текст только на клиенте после монтирования -->
    <span v-if="isMounted">{{ displayWidth }}px x {{ height || "200px" }}</span>
  </div>
</template>
