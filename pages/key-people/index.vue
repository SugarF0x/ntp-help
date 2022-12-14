<template lang="pug">
  div.content
    v-img.float-right.ml-3.mb-3.resize(src="~/assets/img/key-people.jpg")
    nuxt-content(:document="page")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'keyPeople',

  head: {
    titleTemplate: () => 'НТП Деловые консультации - Смиян Игорь Альбертович',
    // meta: [{ hid: 'description', name: 'description', content: 'НТП Деловые Консультации, юридические и смежные услуги, сложные и нестандартные проекты, банкротство, слияния и поглощения, m&a' }]
  },

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

<style lang="sass" scoped>
.resize
  max-width: 200px
  @media (min-width: 960px)
    max-width: 300px
</style>
