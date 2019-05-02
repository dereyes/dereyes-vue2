<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Pic source="projects/breathe/1.jpg" />
    <ProjectProfile :project="project" />
    <h2>Samples</h2>
    <p>Breathe California Sacramento Region has been advocating for clean air and healthy lungs since 1917. The challenge was to refresh the brand of a 100-year-old organization to appeal to a diverse, contemporary audience.</p>
    <Pic source="projects/breathe/2.jpg" />
    <Pic source="projects/breathe/3.png" />
    <Vid insta="https://www.instagram.com/p/BQlLnPJgrpZ/">
      <video controls muted src="projects/breathe/byma.mp4" />
    </Vid>
    <Pic source="projects/breathe/4.jpg" />
    <Vid insta="https://www.instagram.com/p/BV8SmWih-sT/">
      <video controls muted src="projects/breathe/trek.mp4" />
    </Vid>
    <ProjectNav :prevProject="prevProject" :nextProject="nextProject"/>
  </div>
</template>

<script>
import ProjectTitle from '~/components/project/projectTitle'
import ProjectProfile from '~/components/project/projectProfile'
import Vid from '~/components/media/vid'
import Pic from '~/components/media/pic'
import ProjectNav from '~/components/project/projectNav'

export default {
  components: {
    ProjectTitle,
    ProjectProfile,
    Vid,
    Pic,
    ProjectNav
  },
  computed: {
    project() {
      return this.$store.state.projects.breathe
    },
    prevProject() {
      return this.$store.state.projects.fishyflop
    },
    nextProject() {
      return this.$store.state.projects.gato
    }
  }
}
</script>
