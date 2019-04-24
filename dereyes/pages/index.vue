<template>
  <div id="scrollContainer" class="overflowY-scroll flex-fill">
    <div id="intro" class="scrollSnap">
      <h1 class="marginBottom-0 scaled">
        Darin E. Reyes designs delightful digital experiences.
      </h1>
      <h1 class="position-sticky marginBottom-0 scaled">
        ↓
      </h1>
    </div>
    <div id="projects" class="scrollSnap">
      <NavProjects />
    </div>
    <div
      id="footer"
      class="minHeight-50 display-flex flexDirection-col justifyContent-flexEnd scrollSnap"
    >
      <h1 class="marginBottom-0 scaled">
        <span>
          About
        </span>
        <span>
          Contact
        </span>
        <span>
          Insta
        </span>
      </h1>
    </div>
  </div>
</template>

<script>
import NavProjects from '~/components/nav/projects.vue'

export default {
  components: {
    NavProjects
  }
}
</script>

<style lang="scss" scoped>
#scrollContainer {
  scroll-snap-type: y mandatory;
}

#intro {
  min-height: 100%;
  scroll-snap-align: start;
}

#projects {
  min-height: 100%;
  scroll-snap-align: start;
}

#footer {
  min-height: 33%;
  scroll-snap-align: start;
}

.scrollSnap {
  // scroll-snap-type: mandatory;
  // scroll-snap-points-y: repeat(1rem);
  // scroll-snap-type: y mandatory;
  // min-height: 200%;
  //scroll-snap-align: start;
}
</style>
