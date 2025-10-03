import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2025-07-15',
				devtools: { enabled: false },

				modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/test-utils', '@nuxt/ui', '@nuxtjs/i18n', 'nuxt-swiper', '@pinia/nuxt', '@nuxt/icon'],

				css: ['~/style/app.css'],
				vite: {
								plugins: [tailwindcss()],
				},

				i18n: {
								langDir: 'locales/',
								defaultLocale: 'uz',
								strategy: 'prefix_except_default',
								detectBrowserLanguage: {
												useCookie: true,
												cookieKey: 'i18n_redirected',
												alwaysRedirect: true,
												fallbackLocale: 'uz',
												redirectOn: 'root',
								},
								locales: [
												{ code: 'uz', file: 'uz.json', name: 'Uz', language: 'uz-UZ' },
												{ code: 'en', file: 'en.json', name: 'En', language: 'en-US' },
												{ code: 'ru', file: 'ru.json', name: 'Ru', language: 'ru-RU' },
												{ code: 'uzk', file: 'uz-cyrl.json', name: 'Ўз', language: 'uz-UZ' },
								],
				},
})