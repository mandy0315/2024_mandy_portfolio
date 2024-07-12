<script setup lang="ts">
const { dayTime } = useADayTime();


</script>
<template>
  <main class="container">
    <div class="home-air-wrapper">
      <div class="home-air-title">
        <SvgHomeTitle />
      </div>
      <!-- day -->
      <template v-if="dayTime === 'day'">
        <div class="home-air-sun" :class="{ 'active': dayTime === 'day' }">
          <SvgHomeSun />
        </div>
        <HomeMoveingClouds class="home-air-clouds" />
      </template>
      <!-- night -->
      <template v-else>
        <div class="home-air-moon" :class="{ 'active': dayTime === 'night' }">
          <SvgHomeMoon />
        </div>
        <div class="home-wrapper home-air-stars">
          <SvgHomeStars />
        </div>
      </template>

    </div>
  </main>
</template>

<style lang="scss" scoped>
.home-wrapper {
  position: absolute;
  top: 0;
  left: calc(50% - 45rem);
  width: 90rem;
  height: 100%;
  margin: 0 auto;
}

.home-air {
  &-wrapper {
    position: relative;
    width: 100vw;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
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

  &-moon {
    position: absolute;
    top: 8rem;
    right: 8rem;
    z-index: -2;
    max-width: 2.6rem;
    width: 100%;

    svg {
      width: 100%;
      height: auto;
    }

    &.active {
      animation: light 6s linear infinite;
    }
  }


  &-stars {
    display: flex;
    align-items: center;

    svg {
      width: 100%;
      height: auto;

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

@keyframes light {
  0% {
    filter: drop-shadow(2px 2px 5px rgba(238, 255, 142, 0.893));
  }

  50% {
    filter: drop-shadow(2px 2px 20px rgba(255, 236, 65, 0.893));
  }

  100% {
    filter: drop-shadow(2px 2px 5px rgba(238, 255, 142, 0.893));
  }
}
</style>