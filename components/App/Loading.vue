<script setup lang="ts">
interface Props {
  progress: number;
  isLoading: boolean;
}
defineProps<Props>();
</script>
<template>
  <Transition name="fade-out">
    <main v-show="isLoading" class="loading-container">

      <div class="loading-wrapper">
        <div class="loading-icon">
          <div class="loading-icon-people"
            :style="[{ left: (progress - 10) + '%' }, { opacity: progress > 0 ? 1 : 0 }]" />
          <div class="loading-icon-map" />
        </div>

        <div class="loading-bar">
          <div class="loading-bar-line" :style="{ width: progress + '%' }" />
        </div>

        <p class="font-en loading-text">Loading<span>{{ progress }}</span>%</p>
      </div>
    </main>
  </Transition>

</template>
<style lang="scss" scoped>
.loading {
  &-container {
    position: fixed;
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: $gray;
  }

  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30rem;
    height: 100%;
    margin: 0 auto;
  }

  &-icon {
    display: flex;
    width: 30rem;
    align-items: end;

    &-map {
      background: url('/assets/icons/loading/map.svg') no-repeat;
      background-size: contain;
      width: 2rem;
      height: 2.8rem;
      align-self: flex-end;
      margin-left: auto;
    }

    &-people {
      background: url('/assets/icons/loading/people.gif') no-repeat;
      background-size: contain;
      width: 4.3rem;
      height: 8rem;
      position: relative;
      top: 0.2rem;
      left: 0;
    }
  }

  &-bar {
    position: relative;
    height: 1.7rem;
    width: 100%;
    border: 2px solid $brown;
    border-radius: 20px;
    overflow: hidden;

    &-line {
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background: $red;
    }
  }

  &-text {
    font-size: $h5;
    color: $brown;
    margin-right: 1rem;
    font-weight: normal;

    span {
      padding-left: 0.5rem;
      font-size: $h3;
      font-weight: bold;
    }
  }
}

// animation
.loading-bar-line,
.loading-icon-people {
  transition: all 0.5s ease-in-out;
}
</style>
