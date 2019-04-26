<template>
  <div id="projects" :class="{ hovered: hovering }">
    <h1 class="title marginBottom-0">
      <nuxt-link
        v-for="project in projects"
        :key="project.id"
        :to="project.link"
        class="projectName"
      >
        <span
          :class="{ hovered: hovering }"
          @mouseenter="projectMouseEnter"
          @mouseleave="projectMouseLeave"
        >
          {{ project.name }}
        </span>
      </nuxt-link>
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

<style lang="scss" scoped>
@import '~/assets/scss/modules/_all.scss';

#projects {
  min-height: 100%;
  scroll-snap-align: start;
}

#projects.hovered {
  background: map-get($colors, black);
}

a.projectName {
  border: none;
  &:hover {
    color: white;
    opacity: 1;
  }
  & span {
    border-bottom: 0.1em solid map-get($colors, pink);
  }
}
</style>
