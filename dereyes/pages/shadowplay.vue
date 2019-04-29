<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Video>
      <video preload muted autoplay loop src="~/assets/shadowplay/hero.mp4" />
    </Video>
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <p>Audio Muse was a series of concerts held by the Crocker Art Museum that invited a local band and artist to collaborate at a concert. I was paired with The Hot Baked Goods, a swing jazz band. I was inspired to see if an interactive dance floor would encourage non-dancers to dance and strangers to share a delightful, collaborative, creative experience.</p>
    <Video
      caption="A promo video for a user testing session"
      insta="https://www.instagram.com/p/BhN3twSHpSM"
    >
      <video controls muted src="~/assets/shadowplay/promo.mp4" />
    </Video>
    <p>I was fortunate enough to test a prototype with the San Luis Obispo RugCutters, my local swing dance club.</p>
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
      return this.$store.state.projects.shadowplay
    }
  }
}
</script>
