<template>
  <div class="flex-fill col">
    <div id="container" class="flex-fill row" :class="{ navOpen: nav.open }">
      <main class="display-flex flexDirection-col flex-fill">
        <nuxt id="content" />
      </main>
      <NavModal id="navModal" />
      <NavButton />
    </div>
  </div>
</template>

<script>
import NavButton from '~/components/nav/navButton'
import NavModal from '~/components/nav/navModal'

export default {
  components: {
    NavButton,
    NavModal
  },
  computed: {
    nav() {
      return this.$store.state.nav
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  max-width: 540px;
}

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
</style>
