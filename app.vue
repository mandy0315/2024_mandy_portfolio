<script setup lang="ts">
import 'animate.css';
const { openMenu } = useMenu();
const { transitionPosition } = usePageTransition();

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap' }
  ],
})
</script>
<template>
  <Body :class="{ 'page-lock': openMenu }">
    <AppHeader />
    <AppMenu />
    <NuxtPage :transition="{
      name: transitionPosition,
      mode: 'out-in'
    }" />
  </Body>
</template>
