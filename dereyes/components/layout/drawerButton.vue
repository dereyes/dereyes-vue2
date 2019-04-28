<template>
  <div id="drawerButtonContainer" class="position-sticky">
    <button id="drawerButton" class="marginBottom-0">
      <div>
        Henlo fren
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/modules/_all.scss';

#drawerButtonContainer {
  align-self: flex-end;
}

#drawerButton {
  height: map-get($units, '5');
  width: map-get($units, '5');
  border-radius: 50%;
}
</style>
