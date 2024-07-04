<script setup lang="ts">
import 'animate.css';
const { openMenu } = useMenu();
const { transitionPosition } = usePageTransition();
const { aDayTimeInit, dayTime } = useADayTime();

onMounted(() => {
  aDayTimeInit();
})

useHead({
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap' }
  ],
})
</script>
<template>
  <Body :class="[{ 'page-lock': openMenu }, dayTime === 'day' ? 'bg-day' : 'bg-night']">
    <AppHeader />
    <AppMenu />
    <NuxtPage :transition="{
      name: transitionPosition,
      mode: 'out-in'
    }" />
  </Body>
</template>
