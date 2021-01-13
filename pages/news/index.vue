<template lang="pug">
  div.content
    v-img.float-right.ml-3.mb-3.minBase.resize(src="~/assets/img/news.jpg")
    nuxt-content(:document="news")
    ExpandableContent(
      :button-text="$t('news.archive')"
      :document="archive"
    )
      v-img.float-none.float-sm-left.resize(src="~/assets/img/news-archive.jpg")
</template>

<script lang="ts">
import Vue from 'vue'
import ExpandableContent from "~/components/ExpandableContent.vue"

export default Vue.extend({
  name: "news",

  components: {
    ExpandableContent
  },

  data() {
    return {
      archive: undefined as any,
      news: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const pages = await $content(`${app.i18n.locale}/news`).fetch()
    if (Array.isArray(pages))
      return {
        archive: pages.find(entry => entry.slug === 'archive'),
        news: pages.find(entry => entry.slug === 'news')
      }
    else
      console.error(new Error('Failed home page fetch: pages is not an array'))
  }
})
</script>

<style lang="sass" scoped>
.minBase
  max-width: 170px
.resize
  @media (min-width: 600px)
    max-width: 200px
  @media (min-width: 960px)
    max-width: 275px
</style>
