<template lang="pug">
  nuxt-content.content(:document="page")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'keyPeople',

  data() {
    return {
      page: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/key-people`).fetch()
    return {
      page
    }
  }
})
</script>
