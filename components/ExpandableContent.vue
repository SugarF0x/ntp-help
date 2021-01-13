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
        slot
        nuxt-content(
          v-if="document || fetchedDoc"
          :document="document || fetchedDoc"
        )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "ExpandableContent",

  props: [
    'buttonText',
    'document',
    'documentPath',
    'nested'
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
