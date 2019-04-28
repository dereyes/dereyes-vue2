<template>
  <div>
    <video :src="source" controls loop autoplay />
    <p>↑ {{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
    caption: String
  }
}
</script>
