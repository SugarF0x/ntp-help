import locales from './locales'

export default {
  ssr: true,
  target: 'static',
  head() {
    const i18nHead = this.$nuxtI18nHead?.({ addSeoAttributes: true }) ?? { meta: [], link: [] }
    return {
      titleTemplate: 'NTP Help',
      title: 'NTP Help',
      htmlAttrs: i18nHead.htmlAttrs,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'НТП Деловые Консультации, юридические и смежные услуги, сложные и нестандартные проекты, банкротство, слияния и поглощения, m&a' },
        { name: 'keywords', content: 'нтп деловые консультации, банкротство застройщика, субсидиарная ответственность, смиян игорь альбертович' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link
      ]
    }
  },
  css: [
    '~/assets/global'
  ],
  plugins: [

  ],
  components: false,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  content: {
    liveEdit: false
  },
  i18n: {
    vueI18nLoader: true,
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'ru', iso: 'ru-RU' }
    ],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      silentFallbackWarn: true,
      messages: {
        ...locales
      }
    }
  },
  robots: {
    Sitemap: 'https://ntp-help.ru/sitemap.xml',
    Host: 'ntp-help.ru'
  },
  sitemap: {
    hostname: 'https://ntp-help.ru',
    i18n: true
  },
  vuetify: {
    treeShake: {
      loaderOptions: {
        progressiveImages: {
          sharp: true
        }
      }
    },
    theme: {
      dark: false
    }
  },
  build: {

  }
}
