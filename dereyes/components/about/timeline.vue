<template>
  <div id="timeline" class="col">
    <div v-for="(year, keyYear) in timeline" :key="keyYear" class="row">
      <p>{{ keyYear }}</p>
      <div class="col">
        <div v-for="(month, keyMonth) in year" :key="keyMonth" class="row">
          <div class="col">
            <p>{{ keyMonth }}</p>
          </div>
          <div class="col flex-fill">
            <p v-for="event in month" :key="event.id">{{ event }}</p>
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
      return this.$store.state.timeline
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/modules/_all.scss';

#timeline > div > p {
  padding-right: map-get($units, 1);
}

#timeline > div > div > div > div:not(.flex-fill) > p {
  padding-right: map-get($units, 1);
}
</style>
