<template lang="pug">
  span
    | Powered by
    v-btn.px-0.mx-1(
      text
      href="https://github.com/SugarF0x"
    ) Sugar
    | &copy; {{ new Date().getFullYear() }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "SugarMark"
})
</script>
