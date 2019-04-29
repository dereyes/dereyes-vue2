<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Video>
      <video preload muted autoplay loop src="~/assets/shadowplay/hero.mp4" />
    </Video>
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <p>Fishy Flop is a fin-tastic mobile game by The Fishy Flop Team. The game combines the physics of games like Angry Birds with the quirky controls of games like QWOP.</p>
    <p>I ensured that the game featured intuitive interfaces and vibrant, contemporary visuals.</p>
    <h2>The Fishy Flop Team</h2>
    <ul>
      <li>Brian Mah, Lead Developer</li>
      <li>Alex Jungroth, Developer</li>
      <li>Daniel Schlesinger, Developer</li>
      <li>Jordan Henderson, Music, Audio</li>
      <li>Me, Visuals and Interfaces</li>
    </ul>
    <h2>Samples</h2>
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
      return this.$store.state.projects.fishyflop
    }
  }
}
</script>
