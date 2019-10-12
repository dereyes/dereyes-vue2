<template>
  <div class="flex-fill col">
    <main id="pages">
      <nuxt id="content" />
    </main>
    <!-- <NavModal id="navModal" /> -->
    <NavButton />
  </div>
</template>

<script>
import NavButton from '~/components/nav/navButton'
// import NavModal from '~/components/nav/navModal'

export default {
  components: {
    // NavModal,
    NavButton
  },
  computed: {
    nav() {
      return this.$store.state.nav
    }
  }
}
</script>

<style lang="scss" scoped>
// main {
//   max-width: 540px;
// }

#container {
  overflow-y: scroll;
}

#container:not(.navOpen) {
  justify-content: space-between;
  background: white;
}

#container.navOpen {
  background: black;
}

#container.navOpen #content {
  display: none;
}

#container:not(.navOpen) #navModal {
  display: none;
}

#pages {
  scroll-snap-type: y mandatory;
  min-height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
