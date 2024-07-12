<script setup lang="ts">
const cloudsRef = ref<HTMLElement | null>(null);
const clouds = ref([]);
let animationId: ReturnType<typeof requestAnimationFrame>;

const CLOUD_INTERVAL = 3000; // 生成新雲朵的間隔時間

let typeIndex = 0;
const getCloudType = () => {
  const cloudTypes = [1, 2, 3];
  const type = cloudTypes[typeIndex];
  typeIndex = (typeIndex + 1) % cloudTypes.length;
  return type;
};

let cloudId = 0;
let lastCloudTime = 0;
const createCloud = () => {
  const minHeight = window.innerHeight * 0.1;
  const maxHeight = window.innerHeight * 0.4;

  return {
    id: cloudId++,
    x: -160,
    y: minHeight + Math.random() * (maxHeight - minHeight), // 在 10% ~ 40% 範圍內生成
    speed: 1 + Math.random(),
    type: getCloudType(),
  };
};

const animate = (currentTime: number) => {
  // 檢查是否應該生成新雲朵
  if (currentTime - lastCloudTime > CLOUD_INTERVAL) {
    console.log('createCloud');
    clouds.value.push(createCloud());
    lastCloudTime = currentTime;
  }

  // 移動雲朵並移除離開畫面的雲朵
  clouds.value = clouds.value.filter(cloud => {
    cloud.x += cloud.speed;
    return cloud.x < window.innerWidth + 50;
  });

  animationId = requestAnimationFrame(animate);
};

onMounted(() => {
  lastCloudTime = performance.now();
  animate(lastCloudTime);
});
onBeforeUnmount(() => {
  animationId && cancelAnimationFrame(animationId);
});

</script>
<template>
  <div ref="cloudsRef">
    <div v-for="cloud in clouds" :key="cloud.id" :class="['cloud', `cloud-${cloud.type}`]"
      :style="{ left: `${cloud.x}px`, top: `${cloud.y}px` }" />
  </div>
</template>

<style lang="scss" scoped>
.cloud {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.cloud-1 {
  background: url('/assets/icons/home/cloud-1.svg') no-repeat;
  background-size: contain;
  width: 5rem;
  height: 3rem;
}

.cloud-2 {
  background: url('/assets/icons/home/cloud-2.svg') no-repeat;
  background-size: contain;
  width: 3.8rem;
  height: 2rem;
}

.cloud-3 {
  background: url('/assets/icons/home/cloud-3.svg') no-repeat;
  background-size: contain;
  width: 10rem;
  height: 3.8rem;
}
</style>