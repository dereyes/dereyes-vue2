<template>
  <div id="projects" :class="{ hovered: hovering }">
    <h1 class="title marginBottom-0">
      <span v-for="project in projects" :key="project.id" class="projectName">
        <span
          @mouseenter="projectMouseEnter"
          @mouseleave="projectMouseLeave"
          :class="{ hovered: hovering }"
        >
          {{ project.name }}
        </span>
      </span>
    </h1>
    <h1 class="position-sticky marginBottom-0 title">
      ↓
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
    projectMouseEnter: function() {
      this.hovering = true
    },
    projectMouseLeave: function() {
      this.hovering = false
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

.projectName:hover {
  color: white;
}
</style>
