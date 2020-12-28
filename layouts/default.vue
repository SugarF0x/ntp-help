<template lang="pug">
  v-app
    v-app-bar.app-bar(app)
      router-link(
        :to="localePath('/')"
        style="text-decoration: none; color: inherit;"
      )
        v-row(
          justify="center"
          align="center"
        )
          v-toolbar-title.ml-3.text-h4
            span(style="color: #DD2C00") НТП
            span.ml-2.text-h5 Деловые консультации
      v-spacer
      v-toolbar-items(
        v-for="link in links"
        :key="link.text"
      )
        v-btn(
          nuxt
          :to="localePath(link.path)"
        ) {{ link.text }}
    v-main
      v-container
        nuxt
    v-footer(
      app
      absolute
    )
      span Сложные и нестандартные проекты в области права
      v-spacer
      span
        | Powered by
        v-btn.pa-0.mx-1(
          text
          href="https://github.com/SugarF0x"
        ) Sugar
        | &copy; {{ new Date().getFullYear() }}
</template>

<script lang="ts">
import Vue from 'vue'

interface Link {
  text: string,
  path: string
}

export default Vue.extend({
  name: 'layout-default',

  data() {
    return {
      links: [
        { text: 'Сфера деятельности', path: '/' },
        { text: 'Новости', path: '/news' },
        { text: 'Ключевые фигуры', path: '/key-figures' },
        { text: 'Подразделения', path: '/departments' },
        { text: 'Из практики', path: '/cases' },
        { text: 'Контакты', path: '/contacts' },
      ] as Link[]
    }
  }
})
</script>

<style lang="sass">
.app-bar > *
  padding-right: 0 !important // attach nav section to the right
</style>
