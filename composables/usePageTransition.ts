export const usePageTransition = () => {
  const allPaths = ["/", "/about", "/skills", "/works", "/contact"];
  type Position = "slide-left" | "slide-right";
  const transitionPosition = useState<Position>(
    "transitionPosition",
    () => null
  );
  const updatePageTransition = (position: Position) =>
    (transitionPosition.value = position);
  return { transitionPosition, allPaths, updatePageTransition };
};
