<template lang="pug">
  v-app
    v-navigation-drawer.d-lg-none(
      v-model="drawer"
      right
      fixed
    )
      v-layout.fill-height(column)
        v-list.text-uppercase
          v-list-item(
            v-for="link in links"
            :key="link.text+'drawer'"
            :to="localePath(link.path)"
            router
            exact
          )
            v-list-item-content
              v-list-item-title(v-text="$t(link.text)")
        v-spacer
        v-btn.ma-2(:to="switchLocalePath($i18n.locale === 'ru' ? 'en' : 'ru')")
          | {{ $t("locale.switch") }}
          v-icon(right) mdi-translate

    v-app-bar#app-bar(app)
      router-link(
        :to="localePath('/')"
        style="text-decoration: none; color: inherit;"
      )
        v-toolbar-title.text-h4.d-flex.align-center
          div(style="color: #9E3F43") {{ $t("ntp") }}
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
          exact
        ) {{ $t(link.text) }}

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
            div.text-body-2.text-md-h6 {{ $t("ntp.motto") }}
            v-img.d-none.d-sm-flex(src="~/assets/img/header.jpg")
            nuxt.mt-5

    v-footer.px-0.px-md-3.pb-0.py-1.pb-md-1.pt-md-2#footer(
      app
      absolute
    )
      div.d-md-none.text-center.text-caption <!--mobile view-->
        div.my-1 {{ $t("ntp.mark") + String(new Date().getFullYear()) }}
        v-divider
        div.my-1 {{ $t("ntp.ria") }}
        v-divider
        SugarMark
      div.d-none.d-md-flex <!--PC view-->
        span {{ $t("ntp.mark") + String(new Date().getFullYear()) }}
        span.mx-2.text--disabled |
        span {{ $t("ntp.ria") }}
        v-spacer
        v-btn(:to="switchLocalePath($i18n.locale === 'ru' ? 'en' : 'ru')")
          | {{ $t("locale.switch") }}
          v-icon(right) mdi-translate
        span.mx-2.text--disabled |
        SugarMark
</template>

<script lang="ts">
import Vue from 'vue'
import SugarMark from '@/components/SugarMark.vue'

export default Vue.extend({
  name: 'layout-default',

  components: {
    SugarMark
  },

  data() {
    return {
      drawer: false,
      links: [
        { text: "nav.home", path: '/' },
        { text: "nav.news", path: '/news' },
        { text: "nav.key-people", path: '/key-people' },
        { text: "nav.departments", path: '/departments' },
        { text: "nav.cases", path: '/cases' },
        { text: "nav.contacts", path: '/contacts' },
      ]
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
  white-space: nowrap
</style>
