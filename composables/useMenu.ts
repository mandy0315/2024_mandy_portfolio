export const useMenu = () => {
  const openMenu = useState<boolean>("openMenu", () => false);

  return {
    openMenu,
  };
};
