<script setup lang="ts">
const { dayTime } = useADayTime();



</script>
<template>
  <main class="container">
    <div class="home-air-wrapper">
      <div class="home-air-title">
        <SvgHomeTitle />
      </div>
      <template v-if="dayTime === 'day'">
        <div class="home-air-sun" :class="{ 'active': dayTime === 'day' }">
          <SvgHomeSun />
        </div>
        <HomeMoveingClouds class="home-air-clouds" />

      </template>

    </div>
  </main>
</template>

<style lang="scss" scoped>
.home-air {
  &-wrapper {
    position: relative;
    width: 100vw;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-title {
    max-width: 17.5rem;
    width: 100%;

    svg {
      width: 100%;
      height: auto;
    }
  }

  &-sun {
    position: absolute;
    top: 8rem;
    left: 8rem;
    z-index: -2;
    max-width: 3.5rem;
    width: 100%;

    svg {
      width: 100%;
      height: auto;
    }

    &.active {
      animation: turn 16s linear infinite;
    }
  }


}

@keyframes turn {
  from {
    transform: rotateZ(0deg) translate3d(0, 0, 0)
  }

  to {
    transform: rotateZ(-360deg) translate3d(0, 0, 0)
  }
}
</style>