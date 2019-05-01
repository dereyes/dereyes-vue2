<template>
  <div class="tooltipContainer">
    <slot />
    <div class="tooltipTail" />
    <div class="tooltipBody">
      <small>{{ text }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
.tooltipContainer {
  position: relative;
}

.tooltipBody {
  background: black;
  color: white;
  position: absolute;
  left: -50%;
  top: 150%;
  padding: 0.25em;
  text-align: center;
  display: inline-flex;
}

.tooltipTail {
  position: absolute;
  top: 130%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-bottom: 5px solid black;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: ' ';
  font-size: 0;
  line-height: 0;
}

.tooltipContainer:not(:hover) .tooltipTail,
.tooltipContainer:not(:hover) .tooltipBody {
  display: none;
}
</style>
