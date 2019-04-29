<template>
  <div id="drawerButtonContainer" class="position-sticky">
    <button
      id="drawerButton"
      class="marginBottom-0 margin-05"
      :class="{ 'border-white': nav.open }"
      @click="toggle"
    >
      <div>
        Henlo fren
      </div>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    nav() {
      return this.$store.state.nav
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'nav/toggle'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/_all.scss';

#drawerButtonContainer {
  border-radius: 50%;
}

#drawerButton {
  height: map-get($rems, '5');
  width: map-get($rems, '5');
  border-radius: 50%;
}
</style>
