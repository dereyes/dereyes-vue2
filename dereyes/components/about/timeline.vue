<template>
  <div id="timeline" class="col">
    <div v-for="year in timeline" :key="year.id" class="row">
      <h3>{{ year.display }}</h3>
      <div class="col">
        <div
          v-for="(month, keyMonth) in year.months"
          :key="keyMonth"
          class="row"
        >
          <div class="col">
            <h3>{{ keyMonth }}</h3>
          </div>
          <div class="col flex-fill">
            <!-- prettier-ignore -->
            <p v-for="event in month" :key="event.id" v-html="event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    timeline() {
      return this.$store.state.timeline.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/_all.scss';

#timeline > div > h3 {
  padding-right: map-get($rems, '1');
}

#timeline > div > div > div > div:not(.flex-fill) > h3 {
  padding-right: map-get($rems, '1');
}
</style>
