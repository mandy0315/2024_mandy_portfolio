<script setup lang="ts">
const { allPaths } = usePageTransition();
const pagesGroup = computed(() => {
  return allPaths.map((path) => {
    if (path === '/') {
      return {
        path: path,
        name: 'Home',
      }
    } else {
      const name = path.replace('/', '').charAt(0).toUpperCase() + path.replace('/', '').slice(1);
      return {
        path,
        name
      }
    }
  });

})

</script>
<template>
  <div class="nav-container">
    <nav class="nav-wrapper">
      <div v-for="item in pagesGroup" :key="item.path" class="nav-item" data-tooltip-group>
        <div class="nav-text font-en" data-tooltip>{{ item.name }}</div>
        <NuxtLink :to="item.path" class="nav-dot">
          <div />
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.nav {
  &-container {
    position: fixed;
    z-index: 50;
    right: 1rem;
    bottom: 1rem;
    width: 12rem;
    height: 2.3rem;
    background-color: $white;
    border-radius: 40px;
    border: 2px solid $brown;
    box-shadow: 0 4px $brown;
  }

  &-wrapper {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    &::after {
      position: absolute;
      content: '';
      border-bottom: 1px dotted $brown;
      opacity: 0.5;
      width: 100%;
    }
  }

  &-item {
    position: relative;
    z-index: 50;
  }

  &-text {
    position: absolute;
    z-index: 50;
    top: -1.8rem;
    transform: translateX(-30%);
    padding: 0.2rem 0.5rem;
    border-radius: 0.8rem;
    font-size: $s-p;
    color: $white;
    background-color: $brown;

    &::after {
      position: absolute;
      z-index: -1;
      content: '';
      width: 0.6rem;
      height: 0.6rem;
      background-color: $brown;
      bottom: -0.2rem;
      left: calc(50% - 0.3rem);
      transform: rotate(45deg);
    }
  }

  &-dot {
    display: block;
    padding: 0.2rem;

    div {
      background: $white;
      border: 3px solid $brown;
      border-radius: 50%;
      width: 0.5rem;
      height: 0.5rem;
      transform: translateY(0);
    }

    &:hover {
      div {
        background: $brown;
        transform: translateY(-4px);
      }
    }
  }
}
</style>