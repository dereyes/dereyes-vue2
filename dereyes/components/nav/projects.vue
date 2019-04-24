<template>
  <div id="projects">
    <h1 class="position-sticky scaled">
      <span v-for="project in projects" :key="project.id">
        {{ project.name }}
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

<style scoped>
#projects {
  min-height: 150%;
  scroll-snap-align: start;
}
</style>
