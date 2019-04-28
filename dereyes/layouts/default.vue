<template>
  <div class="display-flex flex-fill flexDirection-col">
    <div
      id="container"
      class="display-flex flex-fill overflowY-scroll"
      :class="{ navClosed: !nav.open }"
    >
      <NavButton />
      <main class="display-flex flexDirection-col flex-fill">
        <NavModal v-show="nav.open" />
        <nuxt v-show="!nav.open" />
      </main>
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
  flex-direction: row-reverse;
  justify-content: space-between;
}

#container.navClosed {
  background: white;
  flex-direction: column;
}
</style>
