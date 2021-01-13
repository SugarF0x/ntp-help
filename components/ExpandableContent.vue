<template lang="pug">
  div(:class="nested ? 'nested' : ''")
    v-btn.mb-5(
      @click="show = !show"
      text
      :block="!nested"
    )
      v-icon(left) {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
      | {{ buttonText }}
    v-expand-transition
      div(
        v-show="show"
        :class="nested ? 'bordered' : ''"
      )
        div(v-if="prependSlot")
          slot
          nuxt-content(
            v-if="document || fetchedDoc"
            :document="document || fetchedDoc"
          )
        div(v-else)
          nuxt-content(
            v-if="document || fetchedDoc"
            :document="document || fetchedDoc"
          )
          slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "ExpandableContent",

  props: [
    'buttonText',
    'document',
    'documentPath',
    'nested',
    'prependSlot'
  ],

  data() {
    return {
      show: false,
      fetchedDoc: undefined as any
    }
  },

  async mounted() {
    if (this.documentPath) {
      this.fetchedDoc = await this.$content(`${this.$i18n.locale}${this.documentPath}`).fetch()
    }
  }
})
</script>

<style lang="sass" scoped>
.nested
  margin-left: 1rem
.bordered
  border-left: 1px solid lightgray
  padding-left: 1rem
</style>
