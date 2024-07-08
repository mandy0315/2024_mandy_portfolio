export default defineNuxtRouteMiddleware((to, from) => {
  const { updatePageTransition, allPaths } = usePageTransition();
  const toIndex = allPaths.indexOf(to.path);
  const fromIndex = allPaths.indexOf(from.path);
  if (toIndex === fromIndex || toIndex === -1) return;

  const pageTransition = toIndex > fromIndex ? "slide-left" : "slide-right";
  updatePageTransition(pageTransition);
});
