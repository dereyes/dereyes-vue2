<template>
  <div>
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <!-- prettier-ignore -->
    <p>Audio Muse was a series of concerts held by the Crocker Art Museum that invited a local band and artist to collaborate at a concert. I was paired with The Hot Baked Goods, a swing jazz band. I was inspired to see if an interactive dance floor would encourage non-dancers to dance and strangers to share a delightful, collaborative, creative experience.</p>
    <Video
      source="/_nuxt/assets/shadowplay/promo.mp4"
      caption="A video promo for a user testing session"
    />
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
