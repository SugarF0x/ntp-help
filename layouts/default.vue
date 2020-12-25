<template lang="pug">
  v-app.app
    v-row(
      align="start"
      justify="center"
      no-gutters
    )
      v-col.col(
        cols="12"
        sm="10"
        md="8"
        lg="7"
        xl="6"
      )
        v-card.ma-sm-10.pa-sm-10.clipboard(elevation="12")
          v-card.page
            v-app-bar.headline НТП Деловые консультации
            v-main
              v-container
                nuxt
            v-footer(absolute app)
              v-spacer
              | Power By Sugar &copy; 2020
</template>

<style lang="sass" scoped>
.app
  background-color: #D7DBDB
  height: 100vh
.col
  height: 100%
  display: flex
  flex-flow: column
.clipboard
  border-radius: 1rem
  background-color: #080425
  display: flex
  flex-flow: column
  flex-grow: 1
.page
  background-color: white
  border-radius: 0 !important
  flex-grow: 1
</style>
