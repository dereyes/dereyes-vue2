<template>
  <div>
    <video :src="source" controls loop />
    <p v-if="caption">↑ {{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
    caption: String,
    insta: String
  }
}
</script>
