<template>
  <div class="page">
    <slot />
  </div>
</template>

<style>
.page {
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  border: 1px solid black;
}
</style>
