<template>
  <div class="display-flex flex-fill flexDirection-col">
    <main class="display-flex flex-column flex-fill overflowY-scroll">
      <nuxt />
    </main>
    <Header />
  </div>
</template>

<script>
import Header from '~/components/layout/header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
