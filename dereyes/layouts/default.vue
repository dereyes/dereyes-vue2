<template>
  <div class="display-flex flex-fill flexDirection-col">
    <div class="display-flex flex-fill flexDirection-col overflowY-scroll">
      <DrawerButton />
      <main class="display-flex flexDirection-col flex-fill">
        <nuxt />
      </main>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import DrawerButton from '~/components/layout/drawerButton'

export default {
  components: {
    DrawerButton
  }
}
</script>

<style lang="scss" scoped>
main {
  max-width: 540px;
}
</style>
