<template>
  <!-- prettier-ignore -->
  <div id="drawerButtonContainer">
    <button
      id="drawerButton"
      class="marginBottom-0 margin-05 padding-0"
      :class="{ 'border-white': nav.open }"
      @click="toggle"
    >
      <svg id="svg" viewBox="-50 -50 600 600">
        <path id="curve" d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"  />
          <text width="500">
            <textPath xlink:href="#curve">
              {{ buttonText }}
            </textPath>
          </text>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      buttonText: 'Hello friends'
    }
  },
  computed: {
    nav() {
      return this.$store.state.nav
    }
  },
  mounted() {
    this.viewbox =
      '0 0 ' +
      document.getElementById('drawerButton').offsetWidth +
      ' ' +
      document.getElementById('drawerButton').offsetWidth
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
  position: fixed;
  right: 0;
  top: 0;
}

#drawerButton {
  height: map-get($rems, '5');
  width: map-get($rems, '5');
  border-radius: 50%;
}

#drawerButton svg {
  transform-origin: 50% 50%;
  animation: rotation 120s infinite linear;
  -webkit-animation: rotation 120s infinite linear;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

#drawerButton svg path {
  fill: transparent;
}

#drawerButton svg text {
  font-family: nimbus-sans, sans-serif;
  fill: white;
  font-size: 100px;
}

#drawerButton:active svg text {
  fill: black;
}
</style>
