export const usePageLoad = () => {
  const minLoadingTime = 2000;
  const actualLoadTime = ref(0);
  const progress = useState<number>("progress", () => 0);
  const isLoading = useState<boolean>("isLoading", () => true);
  const startTime = performance.now();
  let intervalId: ReturnType<typeof setInterval>;

  const startLoading = async () => {
    const totalProgress = 100;
    const addProgress = 10;

    progress.value = 0;
    isLoading.value = true;
    const duration =
      actualLoadTime.value < minLoadingTime
        ? minLoadingTime
        : actualLoadTime.value;

    const time = Math.round(duration / (totalProgress / addProgress));

    intervalId = setInterval(() => {
      if (progress.value < totalProgress) {
        progress.value += addProgress;
      } else {
        intervalId && clearInterval(intervalId);
        isLoading.value = false;
      }
    }, time);
  };

  onMounted(() => {
    const endTime = performance.now();
    actualLoadTime.value = endTime - startTime;
    startLoading();
  });

  onUnmounted(() => {
    intervalId && clearInterval(intervalId);
  });
  return { progress, isLoading };
};
