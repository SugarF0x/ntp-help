<template lang="pug">
  v-app
    v-navigation-drawer.d-lg-none(
      v-model="drawer"
      right
      fixed
    )
      v-list
        h2.text-center.mb-1 Навигация
        v-list-item(
          v-for="link in links"
          :key="link.text+'drawer'"
          :to="localePath(link.path)"
          router
        )
          v-list-item-content
            v-list-item-title(v-text="link.text")
    v-app-bar#app-bar(app)
      router-link(
        :to="localePath('/')"
        style="text-decoration: none; color: inherit;"
      )
        v-toolbar-title.text-h4.d-flex.align-center
          div(style="color: #DD2C00") НТП
          div.ml-2.text-h6.text-lg-h5 Деловые консультации
      v-spacer
      v-app-bar-nav-icon.d-lg-none(@click.stop="drawer = !drawer")
      v-toolbar-items.d-none.d-lg-flex(
        v-for="link in links"
        :key="link.text+'navbar'"
      )
        v-btn(
          nuxt
          :to="localePath(link.path)"
        ) {{ link.text }}
    v-main
      v-container
        nuxt
    v-footer#footer(
      app
      absolute
    )
      div.d-md-none.text-center <!--mobile view-->
        SugarMark
      div.d-none.d-md-flex <!--PC view-->
        span Сложные и нестандартные проекты в области права
        v-spacer
        SugarMark
</template>

<script lang="ts">
import Vue from 'vue'
import SugarMark from '@/components/SugarMark.vue'

interface Link {
  text: string,
  path: string
}

export default Vue.extend({
  name: 'layout-default',

  components: {
    SugarMark
  },

  data() {
    return {
      drawer: false,
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
#app-bar
  width: 100%
  > *
    padding-right: 0 !important // attach nav section to the right
#footer > *
  width: 100%
  align-items: center
</style>
