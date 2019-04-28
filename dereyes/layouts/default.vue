<template>
  <div class="display-flex flex-fill flexDirection-col">
    <div class="display-flex flex-fill flexDirection-col overflowY-scroll">
      <NavButton />
      <NavModal />
      <main class="display-flex flexDirection-col flex-fill">
        <nuxt />
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
</style>
