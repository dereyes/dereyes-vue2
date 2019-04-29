<template>
  <div>
    <h1>{{ project.name }}</h1>
    <p>{{ project.subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>
