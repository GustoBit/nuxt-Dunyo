<script setup lang="ts">
import { useSearchModalStore } from "~/store/ui/search";
const searchStore = useSearchModalStore();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-gray-50/80 dark:bg-darkbg backdrop-blur-md border-b-2 border-brand"
  >
    <div
      :class="[
        'relative py-2',
        isScrolled ? 'xl:pt-2 shadow' : 'xl:pt-2',
        'transition-all duration-300 ease-in-out',
      ]"
    >
      <div class="container relative z-50">
        <div class="flex items-center">
          <NuxtLink :to="$localePath('/')" class="w-[169px] h-[44px] block">
            <NuxtImg
              src="/logo.svg"
              alt="Logo"
              class="dark:brightness-0 dark:invert-100 object-contain h-full"
            />
          </NuxtLink>

          <!-- <HeaderSearch /> -->

          <div class="flex items-center gap-2 sm:gap-2 ml-auto">
            <a
              target="_blank"
              href="https://www.youtube.com/@iadunyo_uzb"
              rel="noreferrer"
              class="hidden lg:flex rounded-lg py-[12px] cursor-pointer text-gray-700 dark:text-gray-200 medium text-lg leading-[100%] text-center items-center gap-2"
            >
              <img src="/youtube.svg" alt="Youtube" /> Watch
            </a>
            <button
              type="button"
              class="flex items-center justify-center size-10 hover:bg-gray-200 dark:hover:bg-gray-500/20 rounded-lg p-1 active:bg-white600"
              @click="searchStore.setShow(true)"
            >
              <UIcon
                name="simple-line-icons:magnifier"
                class="!h-5 !w-5 text-gray-600 dark:text-gray-100"
                aria-hidden="true"
              />
            </button>

            <div class="hidden lg:block">
              <HeaderColor />
            </div>
            <HeaderLanguage />

            <HeaderHamburger />
          </div>
        </div>
      </div>

      <ModalDrawer :is-scrolled="isScrolled" />
    </div>
  </header>
</template>
