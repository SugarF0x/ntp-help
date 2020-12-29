<template lang="pug">
  nuxt-content.details.text-justify(:document="page")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'home',

  data() {
    return {
      page: undefined as any
    }
  },

  async asyncData ({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/home`).fetch()
    return {
      page
    }
  }
})
</script>

<style lang="sass">
.details
  ul
    margin-bottom: 1rem
</style>
