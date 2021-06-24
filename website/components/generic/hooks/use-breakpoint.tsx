import { Theme, useMediaQuery } from "@material-ui/core";

export const useBreakpoint = (breakpoint: "xs" | "sm" | "md" | "lg" | "xl") => {
  return useMediaQuery<Theme>((theme) => theme.breakpoints.down(breakpoint));
};
