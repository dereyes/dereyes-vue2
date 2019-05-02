<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Pic source="projects/arirang/2.jpg" />
    <ProjectProfile :project="project" />
    <h2>Process</h2>
    <p>Violinist and songwriter Joe Kye enlisted me to design and code a live audio visualization to accompany his song “Arirang”. The song was inspired by his life as a Korean immigrant and a Korean folk song of the same name. I worked to not just visualize Joe's music, but to visualize the the story behind the song as well.</p>
    <Vid
      insta="https://www.instagram.com/p/BGNPpXtEd7C/"
    >
      <video controls muted src="projects/arirang/testing.mp4" />
    </Vid>
    <p>Joe and I met while I was collaborating on a visualization with Jiayi and Shih-Wen Young for a different song. Above is a video of us testing my code for that project. A week before the performance, I was charged with developing the visuals for “Arirang” on my own.</p>
    <Vid>
      <video autoplay loop muted src="projects/arirang/sprite.mp4" />
    </Vid>
    <p>The visualization combined pre-rendered sprites created in Adobe Illustrator with elements generated live within Processing. Each element was created or modified using audio input from Joe's performance.</p>
    <Vid
      youtube="https://www.youtube.com/watch?v=u4dnh7r_6Wg" caption="A video of a performance on June 10, 2016"
    >
      <video controls muted src="projects/arirang/performance.mp4" />
    </Vid>
    <p>Joe had heard the folk song as a child, when his mother would hum it as she carried him on her back. The project gave us an opportunity to learn more about the song's history and significance, which helped us add meaning to the performance and visualization.</p>
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
      return this.$store.state.projects.arirang
    }
  }
}
</script>
