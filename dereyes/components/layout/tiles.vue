<template>
  <div class="tiles">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tiles {
  display: flex;
  flex-direction: row;
}

@media (max-width: 270px) {
  .tiles {
    flex-direction: column;
  }
}
</style>
