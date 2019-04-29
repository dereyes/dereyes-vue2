<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <p>Audio Muse was a series of concerts held by the Crocker Art Museum that invited a local band and artist to collaborate at a concert. I was paired with The Hot Baked Goods, a swing jazz band. I was inspired to see if an interactive dance floor would encourage non-dancers to dance and strangers to share a delightful, collaborative, creative experience.</p>
    <Video
      source="/_nuxt/assets/shadowplay/promo.mp4"
      caption="A promo video for a user testing session"
      insta="https://www.instagram.com/p/BhN3twSHpSM"
    />
    <p>I was fortunate enough to test a prototype with the San Luis Obispo RugCutters, my local swing dance club.</p>
    <Video
      source="/_nuxt/assets/shadowplay/testing.mp4"
      insta="https://www.instagram.com/p/BhagbzQgDFO/"
    />
    <p>On the night of the concert, ShadowPlay was successful in encouraging audience members of all kinds to dance together. This included children who didn't know each other previously, parents and their children, professional swing dancers, and elderly couples.</p>
  </div>
</template>

<script>
import ProjectProfile from '~/components/project/projectProfile'
import Video from '~/components/media/video'

export default {
  components: {
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
