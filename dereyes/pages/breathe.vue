<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Video>
      <video preload muted autoplay loop src="projects/shadowplay/hero.mp4" />
    </Video>
    <ProjectProfile :project="project" />
    <h2>Samples</h2>
    <p>Breathe California Sacramento Region has been advocating for clean air and healthy lungs since 1917. The challenge was to refresh the brand of a 100-year-old organization to appeal to a diverse, contemporary audience.</p>
  </div>
</template>

<script>
import ProjectTitle from '~/components/project/projectTitle'
import ProjectProfile from '~/components/project/projectProfile'
import Video from '~/components/media/vid'

export default {
  components: {
    ProjectTitle,
    ProjectProfile,
    Video
  },
  computed: {
    project() {
      return this.$store.state.projects.breathe
    }
  }
}
</script>
