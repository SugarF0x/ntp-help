<template lang="pug">
  div
    nuxt-content.details(:document="excerpt")
    v-btn(
      @click="show = !show"
      text
      block
    ).mb-5
      v-icon(left) {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      | {{ $t("link.details") }}
    v-expand-transition
      nuxt-content.details(
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

<style lang="sass">
.details
  ul
    margin-bottom: 1rem
</style>
