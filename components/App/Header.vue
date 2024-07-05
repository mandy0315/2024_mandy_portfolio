<script setup lang="ts">
const { openMenu } = useMenu();

</script>
<template>
  <header class="header-container">
    <div class="header-logo">
      <a data-ToHome="home">
        <SvgLogoText />
      </a>
    </div>
    <div class="header-menu">
      <button @click="openMenu = true">
        <SvgMenuPointer />
      </button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  &-container {
    height: 5rem;
    z-index: 50;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }

  &-logo {
    filter: drop-shadow(0px 6px 0px rgba(85, 150, 202, 0.8));
    padding: 0 1rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 1rem;
      background: url('/assets/icons/logo/bg.svg') no-repeat;
      background-size: contain;
      width: 10rem;
      height: 4.2rem;

      svg {
        width: 80%;
        height: 80%;
        z-index: 120;
      }
    }
  }

  &-menu {
    filter: drop-shadow(0px 6px 0px rgba(85, 150, 202, 0.8));
    padding: 0 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: url('/assets/icons/menu/bg.svg') no-repeat;
      background-size: contain;
      width: 3.5rem;
      height: 3.5rem;

      svg {
        margin-top: -0.5rem;
        width: 2rem;
        transform: rotateZ(90deg) translate3d(0, 0, 0);
        -webkit-transform: rotateZ(90deg) translate3d(0, 0, 0);
        -webkit-transition: all 500ms ease-in-out;
        transition: all 500ms ease-in-out;
      }
    }

  }
}
</style>