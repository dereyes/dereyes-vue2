<template>
  <div class="marginBottom-15">
    <slot />
    <p class="caption marginBottom-0" v-if="caption">↑ {{ caption }}</p>
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
