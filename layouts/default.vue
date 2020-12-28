<template lang="pug">
  v-app(dark)
    v-app-bar(app)
      router-link(
        :to="localePath('/')"
        style="text-decoration: none; color: inherit;"
      )
        v-row(
          justify="center"
          align="center"
        )
          v-toolbar-title.ml-3 НТП
    v-main
      v-container
        nuxt
    v-footer(
      app
      absolute
    )
      v-spacer
      span Sugar Archives Template &copy; {{ new Date().getFullYear() }}
</template>
