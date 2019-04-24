<template>
  <div id="projects" :class="{ hovered: hovering }">
    <h1 class="position-sticky scaled">
      <span v-for="project in projects" :key="project.id" class="projectName">
        <span @mouseover="projectHovered" :class="{ hovered: hovering }">
          {{ project.name }}
        </span>
      </span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovering: false
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects.projects
    }
  },
  methods: {
    projectHovered: function() {
      this.hovering = !this.hovering
    }
  }
}
</script>

<style scoped>
#projects {
  min-height: 100%;
  scroll-snap-align: start;
}

#projects.hovered {
  background: black;
}

.projectName.hovered {
  color: white;
}
</style>
