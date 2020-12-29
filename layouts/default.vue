<template lang="pug">
  v-app
    v-navigation-drawer.d-lg-none(
      v-model="drawer"
      right
      fixed
    )
      v-list.text-uppercase
        h2.text-center.mb-1 {{ $t("nav") }}
        v-list-item(
          v-for="link in links"
          :key="link.text+'drawer'"
          :to="localePath(link.path)"
          router
          exact
        )
          v-list-item-content
            v-list-item-title(v-text="link.text")
    v-app-bar#app-bar(app)
      router-link(
        :to="localePath('/')"
        style="text-decoration: none; color: inherit;"
      )
        v-toolbar-title.text-h4.d-flex.align-center
          div(style="color: #DD2C00") {{ $t("ntp.title") }}
          div.ml-2.text-h6.text-lg-h5 {{ $t("ntp.subtitle") }}
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
        v-row.fill-height(justify="center")
          v-col.fill-height(
            cols="12"
            xs="11"
            sm="10"
            md="9"
            lg="8"
          )
            nuxt
    v-footer.px-0.px-md-3#footer(
      app
      absolute
    )
      div.d-md-none.text-center <!--mobile view-->
        div.my-2 {{ $t("ntp.mark") }}
        v-divider
        SugarMark
      div.d-none.d-md-flex <!--PC view-->
        span {{ $t("ntp.mark") }}
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
        { text: this.$t("nav.home"), path: '/' },
        { text: this.$t("nav.news"), path: '/news' },
        { text: this.$t("nav.key-people"), path: '/key-people' },
        { text: this.$t("nav.departments"), path: '/departments' },
        { text: this.$t("nav.cases"), path: '/cases' },
        { text: this.$t("nav.contacts"), path: '/contacts' },
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
