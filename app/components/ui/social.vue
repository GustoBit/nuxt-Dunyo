<script setup lang="ts">
interface Social {
  url: string;
  img: string;
  name: string;
}

interface Props {
  vertical?: boolean;
}

defineProps<Props>();

const nav = ref<Social[]>([
  {
    url: "https://www.youtube.com/channel/UCwHXdaoLTPBkaEQBMCDp6yQ",
    img: "youtube",
    name: "Youtube",
  },
  { url: "https://twitter.com/Dunyo_IA", img: "twitter", name: "Twitter" },
  {
    url: "https://www.facebook.com/DunyoIA/",
    img: "facebook",
    name: "Facebook",
  },
  { url: "https://t.me/iadunyo_uz", img: "telegram", name: "Telegram" },
  { url: "", img: "instagram", name: "Instagram" },
  { url: "", img: "linkedin", name: "Linkedin" },
  { url: "https://api.dunyo.info/api/news/rss", img: "rss", name: "RSS" },
]);
</script>

<template>
  <div :class="['flex items-center gap-3', vertical ? 'flex-col' : 'flex-row']">
    <a
      v-for="(item, index) in nav"
      :key="item.name + index"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      class="w-8 h-8 rounded-lg flex items-center justify-center border border-white600 dark:border-gray-500/20 xl:hover:bg-white600 active:bg-white600 xl:dark:hover:bg-gray-500/20 dark:active:bg-gray-500/20"
    >
      <Icon
        :name="`line-md:${item.img}`"
        class="w-5 h-5 object-cover object-center"
      />
    </a>
  </div>
</template>
