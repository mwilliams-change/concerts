import { withTheme } from "emotion-theming";
import { useMedia } from "../lib/usemedia";

const IsDesktop = withTheme(({ children, theme }) => {
  const isWide = useMedia(`(min-width: ${theme.breakpoints[0]})`);

  console.log("isWide", isWide);

  if (isWide) return children;
  return null;
});

export default IsDesktop;