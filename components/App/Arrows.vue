<script setup lang="ts">
const { allPaths } = usePageTransition();
const route = useRoute();
const currentPageIndex = computed(() => allPaths.indexOf(route.path));

const goToBackPage = async () => {
  await navigateTo(allPaths[currentPageIndex.value - 1]);
};
const goToNextPage = async () => {
  await navigateTo(allPaths[currentPageIndex.value + 1]);
};
</script>
<template>
  <div class="arrow-container">
    <button v-if="currentPageIndex > 0" class="arrow-back" @click="goToBackPage">
      <SvgIconArrow />
    </button>
    <button v-if="currentPageIndex !== (allPaths.length - 1)" class="arrow-next" @click="goToNextPage">
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