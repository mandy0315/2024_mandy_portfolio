<script setup lang="ts">
const { transitionPosition } = usePageTransition();
</script>
<template>
  <div>
    <p>{{ transitionPosition }}</p>
    <NuxtPage :transition="{
      name: transitionPosition,
      mode: 'out-in'
    }" />

  </div>
</template>
