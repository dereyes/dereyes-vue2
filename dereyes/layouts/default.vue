<template>
  <div class="display-flex flex-fill flexDirection-col">
    <div class="display-flex flex-fill flexDirection-col overflowY-scroll">
      <main class="display-flex flexDirection-col flex-fill">
        <nuxt />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/layout/footer'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
main {
  max-width: 540px;
}
</style>
