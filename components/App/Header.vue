<script setup lang="ts">
const { openMenu } = useMenu();

</script>
<template>
  <header class="header-container">
    <div class="logo-wrapper">
      <a data-ToHome="home">
        <SvgLogoText />
      </a>
    </div>
    <div class="menu-icon-wrapper">
      <button @click="openMenu = true">
        <SvgMenuPointer />
      </button>
    </div>
  </header>
</template>