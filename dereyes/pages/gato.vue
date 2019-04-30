<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Vid>
      <video preload controls src="projects/gato/doc.mp4" />
    </Vid>
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <p>The purpose of the grant was to create art that could help make babies and children school-ready. I designed a multi-layered experience that engaged the developing senses of babies, the playfulness of children, and the emotional development of their caretakers.</p>
    <p>The piece features a 20-foot stuffed cat, motion-reactive projected visuals, and music that changes depending on a visitor's position in the space.</p>
    <Pic source="projects/gato/kinect.gif" caption="Using an Xbox Kinect to create motion-reactive visuals in the Unity Game Engine" />
    <Pic source="projects/gato/1.jpg" />
    <p>The giant cat was inspired by the work of childhood psychologist DW Winnicott. He theorised that our childhood relationships to soft toys deepen our relationships to reality and ourselves, and prepare us to be emotionally mature adults.</p>
    <p>It is meant to remind adults of what it was like to be small, and to have a stuffed companion. Young visitors have enjoyed climbing over the cat and cuddling with it while watching the projection. Some children have spent over an hour with the cat.</p>
    <Pic source="projects/gato/2.gif" caption="Imagery in the projection tells the story of twenty-something reconnecting with their childhood selves." />
  </div>
</template>

<script>
import ProjectTitle from '~/components/project/projectTitle'
import ProjectProfile from '~/components/project/projectProfile'
import Vid from '~/components/media/vid'
import Pic from '~/components/media/pic'

export default {
  components: {
    ProjectTitle,
    ProjectProfile,
    Vid,
    Pic
  },
  computed: {
    project() {
      return this.$store.state.projects.gato
    }
  }
}
</script>
