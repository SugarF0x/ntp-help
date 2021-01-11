<template lang="pug">
  div.details
    v-img(src="~/assets/img/home.jpg").float-right.ml-3.mb-3.resize
    nuxt-content(:document="excerpt")
    ExpandableContent(
      :button-text="$t('link.details')"
      :document="details"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import ExpandableContent from "~/components/ExpandableContent.vue"

export default Vue.extend({
  name: 'home',

  components: {
    ExpandableContent
  },

  data() {
    return {
      excerpt: undefined as any,
      details: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const pages = await $content(`${app.i18n.locale}/home`).fetch()
    if (Array.isArray(pages))
      return {
        excerpt: pages.find(entry => entry.path.includes('excerpt')),
        details: pages.find(entry => entry.path.includes('details'))
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
