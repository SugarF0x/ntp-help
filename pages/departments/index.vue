<template lang="pug">
  div
    nuxt-content.content(:document="page")
    v-img.d-none.d-sm-block.float-sm-left.resize(src="~/assets/img/departments.jpg")
</template>

<script lang="ts">
import Vue from 'vue'
import ExpandableContent from "~/components/ExpandableContent.vue"

export default Vue.extend({
  name: 'departments',

  components: {
    ExpandableContent
  },

  data() {
    return {
      page: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/departments/departments`).fetch()
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
    max-width: 275px
</style>
