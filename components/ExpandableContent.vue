<template lang="pug">
  div
    v-btn.mb-5(
      @click="show = !show"
      text
      block
    )
      v-icon(left) {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      | {{ buttonText }}
    v-expand-transition
      nuxt-content(
        v-show="show"
        :document="document"
      )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "ExpandableContent",

  props: [
    'buttonText',
    'document'
  ],

  data() {
    return {
      show: false
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
