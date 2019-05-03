<template>
  <div id="projects" :class="{ hovered: hovering }">
    <div id="videoContainer">
      <video id="videoBackground" :src="source" preload autoplay loop muted />
    </div>
    <div id="foreground">
      <h1 class="title marginBottom-0">
        <nuxt-link
          v-for="project in projects"
          :key="project.id"
          :to="project.link"
          class="projectName"
        >
          <span
            :class="{ hovered: hovering }"
            @mouseenter="projectMouseEnter(project)"
            @mouseleave="projectMouseLeave(project)"
          >
            {{ project.name }}
          </span>
        </nuxt-link>
      </h1>
      <h1 class="position-sticky marginBottom-0 title">
        ↓
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovering: false,
      source: ''
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
  methods: {
    projectMouseEnter: function(project) {
      this.hovering = true
      this.source = project.hero
    },
    projectMouseLeave: function(project) {
      this.hovering = false
      this.source = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/_all.scss';

#projects {
  height: 100%;
  scroll-snap-align: start;
  position: relative;
  display: flex;
}

#videoContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1 1 0;
}

#foreground {
  position: absolute;
  top: 0;
  left: 0;
}

#videoBackground {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
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
