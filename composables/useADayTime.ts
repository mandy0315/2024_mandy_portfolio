export const useADayTime = () => {
  type DayTime = "day" | "night";
  const dayTime = useState<DayTime>("dayTime", () => "day");
  let intervalId: ReturnType<typeof setInterval>;

  const isDayTime = (hour: number): boolean => {
    return hour >= 6 && hour < 18;
  };

  const updateDayTime = () => {
    const currentHour = new Date().getHours();
    dayTime.value = isDayTime(currentHour) ? "day" : "night";
  };

  const aDayTimeInit = () => {
    updateDayTime();
    intervalId = setInterval(updateDayTime, 60000);
  };

  onBeforeUnmount(() => {
    intervalId && clearInterval(intervalId);
  });

  return { dayTime, aDayTimeInit };
};
