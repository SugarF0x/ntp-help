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
      { hid: 'description', name: 'description', content: 'НТП Деловые Консультации, юридические и смежные услуги, сложные и нестандартные проекты, банкротство, слияния и поглощения, m&a' }
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
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxt/content',
    'nuxt-i18n'
  ],
  content: {
    liveEdit: false
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        ...locales
      }
    }
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
