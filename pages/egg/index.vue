<template lang="pug">
  v-row
    v-col.d-flex.child-flex(
      v-for="n in 16"
      :key="n"
      cols="12"
      md="6"
      lg="4"
      xl="3"
    )
      v-img.grey.lighten-2.item(
        :src="require(`~/assets/img/egg/${n}.jpg`)"
      )
        template(v-slot:placeholder)
          v-row.fill-height.ma-0(
            align="center"
            justify="center"
          )
            v-progress-circular(
              indeterminate
              color="grey lighten-5"
            )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "egg"
})
</script>

<style scoped lang="sass">
.item
  border: 1px solid lightgray
</style>
