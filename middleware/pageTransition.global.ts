export default defineNuxtRouteMiddleware((to, from) => {
  const { updatePageTransition, allPages } = usePageTransition();
  const toIndex = allPages.indexOf(to.path);
  const fromIndex = allPages.indexOf(from.path);
  if (toIndex === fromIndex || toIndex === -1) return;

  const pageTransition = toIndex > fromIndex ? "slide-left" : "slide-right";
  updatePageTransition(pageTransition);
});
