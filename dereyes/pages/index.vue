<template>
  <div>
    <h1>
      Darin E. Reyes is an immersive artist living in San Luis Obispo, CA
    </h1>
    <h1>
      <span v-for="project in projects" :key="project.id">
        {{ project.name }}
      </span>
    </h1>
    <h1>
      <span>
        About
      </span>
      <span>
        Contact
      </span>
      <span>
        Insta
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects.projects
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4.5vw;
}
</style>
