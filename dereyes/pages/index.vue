<template>
  <div id="scrollContainer" class="overflowY-scroll flex-fill">
    <div id="intro" class="scrollSnap">
      <h1 class="marginBottom-0 title">
        Darin E. Reyes designs delightful digital experiences.
      </h1>
      <h1 class="position-sticky marginBottom-0 title">
        ↓
      </h1>
    </div>
    <NavProjects />
    <div
      id="footer"
      class="minHeight-50 display-flex flexDirection-col justifyContent-flexEnd scrollSnap"
    >
      <h1 class="marginBottom-0 title">
        <nuxt-link to="/index">
          About
        </nuxt-link>
        <nuxt-link to="/index">
          Contact
        </nuxt-link>
        <a>
          Insta
        </a>
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

#footer {
  min-height: 33%;
  scroll-snap-align: start;
}
</style>
