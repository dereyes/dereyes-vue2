<template>
  <div>
    <div class="minHeight-100">
      <h1 class="marginBottom-0">
        Darin E. Reyes designs delightful experiences.
      </h1>
      <h1 class="position-sticky marginBottom-0">
        ↓
      </h1>
    </div>
    <div class="minHeight-150">
      <h1 class="position-sticky">
        <span v-for="project in projects" :key="project.id">
          {{ project.name }}
        </span>
      </h1>
    </div>
    <div
      class="minHeight-50 display-flex flexDirection-col justifyContent-flexEnd"
    >
      <h1 class="marginBottom-0">
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
  font-size: 7.5vw;
}

.minHeight-150 {
  min-height: 150%;
}

.minHeight-50 {
  min-height: 50%;
}
</style>
