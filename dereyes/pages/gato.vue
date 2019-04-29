<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Video>
      <video preload muted autoplay loop src="~/assets/shadowplay/hero.mp4" />
    </Video>
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <p>The purpose of the grant was to create art that could help make babies and children school-ready. I designed a multi-layered experience that engaged the developing senses of babies, the playfulness of children, and the emotional development of their caretakers.</p>
    <p>The piece features a 20-foot stuffed cat, motion-reactive projected visuals, and music that changes depending on a visitor's position in the space.</p>
    <Video
      caption="A promo video for a user testing session"
      insta="https://www.instagram.com/p/BhN3twSHpSM"
    >
      <video controls muted src="~/assets/shadowplay/promo.mp4" />
    </Video>
    <p>The giant cat was inspired by the work of childhood psychologist DW Winnicott. He theorised that our childhood relationships to soft toys deepen our relationships to reality and ourselves, and prepare us to be emotionally mature adults.</p>
    <p>It is meant to remind adults of what it was like to be small, and to have a stuffed companion. Young visitors have enjoyed climbing over the cat and cuddling with it while watching the projection. Some children have spent over an hour with the cat.</p>
    <Video
      insta="https://www.instagram.com/p/BhagbzQgDFO/"
    >
      <video controls muted src="~/assets/shadowplay/testing.mp4" />
    </Video>
    <p>On the night of the concert, ShadowPlay was successful in encouraging audience members of all kinds to dance together. This included children who didn't know each other previously, parents and their children, professional swing dancers, and elderly couples.</p>
    <Video
      caption="A short video showcasing the final result, to the song Viper Mad by The Hot Baked Goods"
      vimeo="https://vimeo.com/278603739"
    >
      <video preload controls muted src="~/assets/shadowplay/doc720.mp4" />
    </Video>
  </div>
</template>

<script>
import ProjectTitle from '~/components/project/projectTitle'
import ProjectProfile from '~/components/project/projectProfile'
import Video from '~/components/media/video'

export default {
  components: {
    ProjectTitle,
    ProjectProfile,
    Video
  },
  computed: {
    project() {
      return this.$store.state.projects.gato
    }
  }
}
</script>
