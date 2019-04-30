<template>
  <div class="marginBottom-15">
    <img :src="source" />
    <p v-if="caption" class="caption marginBottom-0">↑ {{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
    caption: String,
    insta: String,
    vimeo: String
  }
}
</script>
