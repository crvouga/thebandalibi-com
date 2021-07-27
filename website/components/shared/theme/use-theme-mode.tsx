import constate from "constate";
import cookie from "js-cookie";
import { useEffect, useState } from "react";

export type IThemeMode = "light" | "dark" | "system";

const KEY = "theme-mode";

export const ThemeMode = (mode: unknown): IThemeMode => {
  if (mode === "light" || mode === "dark" || mode === "system") {
    return mode;
  }

  return "system";
};

export const [ThemeModeContext, useThemeModeContext] = constate(() => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(
    ThemeMode(cookie.get(KEY))
  );

  useEffect(() => {
    if (themeMode) {
      cookie.set(KEY, ThemeMode(themeMode));
    }
  }, [themeMode]);

  return {
    themeMode,
    setThemeMode,
  };
});
