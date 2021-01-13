<template lang="pug">
  nuxt-content.content(:document="page")
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
