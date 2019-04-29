<template>
  <div>
    <h1 class="marginBottom-15">{{ project.name }}</h1>
    <p>{{ project.subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line
    project: Object
  }
}
</script>
