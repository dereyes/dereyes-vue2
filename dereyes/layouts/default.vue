<template>
  <div class="flex-fill col">
    <div
      id="container"
      class="flex-fill overflowY-scroll row"
      :class="{ navClosed: !nav.open }"
    >
      <main class="display-flex flexDirection-col flex-fill">
        <nuxt v-show="!nav.open" />
      </main>
      <NavModal v-show="nav.open" />
      <no-ssr>
        <NavButton />
      </no-ssr>
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
  justify-content: space-between;
}

#container:not(.navClosed) {
  background: black;
}

#container.navClosed {
  background: white;
}
</style>
