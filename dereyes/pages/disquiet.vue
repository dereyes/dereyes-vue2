<template>
  <!-- prettier-ignore -->
  <div>
    <ProjectTitle :project="project" />
    <Pic source="projects/disquiet/1.gif" />
    <ProjectProfile :project="project" />
    <h2>Concept</h2>
    <Pic source="projects/disquiet/2.JPG" caption="An early, clock-inspired iteration of an accessible musical interface" />
    <p>The emotional health of incoming American college freshman hit an all-time low in 2014<sup>1</sup>. Half of all college students report “overwhelming anxiety”<sup>2</sup>. Each year, 1100 students take their own lives.</p>
    <p>For my Design Honors project at UC Davis, I asked “How might I use interactive design to improve the lives of emotionally struggling students?”.</p>
    <p>The result, an app named DisQuiet, is based on the principle of Dialectical Behavioral Therapy that an engaging, creative, multisensory distractions can help people survive moments when depression and anxiety are overwhelming.</p>
    <p>The app turns a user's touches, taps, and scribbles into harmonious musical loops, regardless of their musical experience. DisQuiet shows how we can expand the definitions of interactive design, human-centered design, and experience design to address core human issues.</p>
    <h2>Process</h2>
    <Pic source="projects/disquiet/6.JPG" />
    <h3>Primary research</h3>
    <p>After framing the challenge and defining my audience, I surveyed UC Davis students on their musical preferences during emotional distress to get a sense of what people might listen for to relieve emotional distress. Responses were varied, and included esponses such as “Debussy”, “Kanye West”, “cacophonous”, “Bossa Nova”, and “Ukulele!”.</p>
    <Pic source="projects/disquiet/3.JPG" caption="A later iteration, which was used in user testing" />
    <p>After initial reading and surveying, I began iterating accessible musical interfaces and conducting user testing. One tester at the 2016 UC Davis Undergraduate Research Conference commented:</p>
    <blockquote>“I feel like I could use this for hours”.</blockquote>
    <Pic source="projects/disquiet/4.JPG" caption="A monophonic melody sequencer" />
    <h3>Secondary research</h3>
    <p>I collected work from a variety of fields to develop a wide and nuanced view of the issues. I read about Design for Meaningful Experiences, Human-Centered Design, Dialectical Behavioral Therapy, mindfulness, and more.</p>
    <Vid>
      <video controls src="projects/disquiet/demo.mp4" />
    </Vid>
    <p>This was the first project where I explored the intersections of music, design, code, and mental health. I continued this exploration in projects such as Gato.</p>
    <p><sup>1</sup>According to the Higher Education Research Institute at UCLA</p>
    <p><sup>2</sup>According to the American College Health Association</p>
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
      return this.$store.state.projects.disquiet
    }
  }
}
</script>
