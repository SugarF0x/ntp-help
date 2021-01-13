<template lang="pug">
  div
    v-img.float-none.float-sm-right.ml-0.ml-sm-3.mb-3.resize(src="~/assets/img/cases1.jpg")
    nuxt-content.content(:document="page")
    v-img.float-none.float-sm-left.resize(src="~/assets/img/cases2.jpg")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "cases",

  data() {
    return {
      page: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/cases`).fetch()
    return {
      page
    }
  }
})
</script>

<style lang="sass" scoped>
.resize
  @media (min-width: 600px)
    max-width: 200px
  @media (min-width: 960px)
    max-width: inherit
</style>
