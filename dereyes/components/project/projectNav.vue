<template>
  <div>
    <p>
      <nuxt-link v-if="prevProject" :to="prevProject.link">
        Previous project: {{ prevProject.name }}
      </nuxt-link>
    </p>
    <p>
      <nuxt-link v-if="nextProject" :to="nextProject.link">
        Next project: {{ nextProject.name }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    prevProject: Object,
    nextProject: Object
  }
}
</script>
