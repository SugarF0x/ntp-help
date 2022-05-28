import locales from './locales'

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: 'NTP Help',
    title: 'NTP Help',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'НТП Деловые Консультации, юридические и смежные услуги, сложные и нестандартные проекты, банкротство, слияния и поглощения, m&a' },
      { name: 'keywords', content: 'нтп деловые консультации, банкротство застройщика, субсидиарная ответственность, смиян игорь альбертович' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  content: {
    liveEdit: false
  },
  i18n: {
    vueI18nLoader: true,
    locales: ['en', 'ru'],
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
    Sitemap: 'https://ntp-help.ru/sitemap.xml'
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
