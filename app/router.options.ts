import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    // Добавляем селектор элемента, который нужно прокрутить
    return {
      top: 0,
      el: '#main-content', // <-- Указываем наш ID
    }
  }
}