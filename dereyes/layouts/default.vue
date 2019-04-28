<template>
  <div class="display-flex flex-fill flexDirection-col">
    <div
      id="container"
      class="display-flex flex-fill overflowY-scroll flexDirection-col"
      :class="{ navClosed: !nav.open }"
    >
      <NavButton />
      <main class="display-flex flexDirection-col flex-fill">
        <nuxt v-show="!nav.open" />
      </main>
      <NavModal v-show="nav.open" />
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

#container:not(.navClosed) {
  background: black;
}

#container.navClosed {
  background: white;
}
</style>
