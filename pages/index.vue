<template lang="pug">
  div.details
    v-img(src="~/assets/img/home.jpg").float-right.ml-3.mb-3.resize
    nuxt-content(:document="excerpt")
    v-btn(
      @click="show = !show"
      text
      block
    ).mb-5
      v-icon(left) {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      | {{ $t("link.details") }}
    v-expand-transition
      nuxt-content(
        v-show="show"
        :document="details"
      )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home',

  data() {
    return {
      show: false,
      excerpt: undefined as any,
      details: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const pages = await $content(`${app.i18n.locale}/home`).fetch()
    if (Array.isArray(pages))
      return {
        excerpt: pages[0],
        details: pages[1]
      }
    else
      console.error(new Error('Failed home page fetch: pages is not an array'))
  }
})
</script>

<style lang="sass" scoped>
.resize
  max-width: 120px
  @media (min-width: 600px)
    max-width: 160px
  @media (min-width: 960px)
    max-width: 200px
</style>

<style lang="sass">
.details
  ul
    margin-bottom: 1rem
</style>
