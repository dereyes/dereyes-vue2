<template>
  <div class="marginBottom-15">
    <slot />
    <div class="row">
      <div class="col paddingRight-1 flex-fill">
        <p v-if="caption" class="caption marginBottom-0">↑ {{ caption }}</p>
      </div>
      <div class="col">
        <Tooltip v-if="insta" text="Watch on Instagram">
          <a :href="insta">
            <i class="fab fa-instagram"></i>
          </a>
        </Tooltip>
        <Tooltip v-if="vimeo" text="Watch on Vimeo">
          <a :href="vimeo">
            <i class="fab fa-vimeo-v"></i>
          </a>
        </Tooltip>
        <Tooltip v-if="youtube" text="Watch on Vimeo">
          <a :href="youtube">
            <i class="fab fa-youtube"></i>
          </a>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from '~/components/micro/tooltip'

export default {
  components: {
    Tooltip
  },
  props: {
    source: String,
    caption: String,
    insta: String,
    vimeo: String,
    youtube: String
  }
}
</script>
