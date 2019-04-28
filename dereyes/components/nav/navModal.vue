<template>
  <div>
    <p @click="toggle">
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </p>
    <p @click="toggle">
      <nuxt-link
        v-for="project in projects"
        :key="project.id"
        :to="project.link"
      >
        {{ project.name }}
      </nuxt-link>
    </p>
    <p @click="toggle">
      <nuxt-link v-for="l in nav.links" :key="l.id" :to="l.link">
        {{ l.name }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    nav() {
      return this.$store.state.nav
    },
    projects() {
      return this.$store.state.projects.projects
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'nav/toggle'
    })
  }
}
</script>

<style lang="scss" scoped>
a {
  color: white;
}
</style>
