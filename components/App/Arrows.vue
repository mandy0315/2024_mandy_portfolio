<script lang="ts">

</script>
<template>
  <div class="arrow-container">
    <button class="arrow-back">
      <SvgIconArrow />
    </button>
    <button class="arrow-next">
      <SvgIconArrow />
    </button>
  </div>
</template>
<style lang="scss" scoped>
.arrow {
  &-container {
    position: fixed;
    z-index: 50;
    top: 50%;
    width: 100%;
    height: 100%;
  }

  &-back,
  &-next {
    position: absolute;

    svg {
      color: $white;
      width: 2rem;
      height: 2rem;
    }
  }

  &-back {
    left: 1rem;
    transform: scaleX(-1);

    &:hover {
      transform: translateX(-0.5rem) scaleX(-1);

      svg {
        color: $yellow;
      }
    }
  }

  &-next {
    right: 1rem;

    &:hover {
      transform: translateX(0.5rem);

      svg {
        color: $yellow;
      }
    }
  }
}
</style>