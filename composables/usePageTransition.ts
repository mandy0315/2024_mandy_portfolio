export const usePageTransition = () => {
  const allPages = ["/", "/about", "/skills", "/works", "/contact"];
  type Position = "slide-left" | "slide-right";
  const transitionPosition = useState<Position>(
    "transitionPosition",
    () => null
  );
  const updatePageTransition = (position: Position) =>
    (transitionPosition.value = position);
  return { transitionPosition, allPages, updatePageTransition };
};
