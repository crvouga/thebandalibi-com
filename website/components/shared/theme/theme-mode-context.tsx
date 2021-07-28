import constate from "constate";
import cookie from "js-cookie";
import { useEffect, useState } from "react";

export type IThemeMode = "light" | "dark";

const KEY = "theme-mode";

export const ThemeMode = (mode: unknown): IThemeMode => {
  if (mode === "light" || mode === "dark") {
    return mode;
  }

  return "light";
};

export const [ThemeModeContext, useThemeModeContext] = constate(() => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(() => {
    return ThemeMode(cookie.get(KEY));
  });

  useEffect(() => {
    cookie.set(KEY, ThemeMode(themeMode));
  }, [themeMode]);

  return {
    themeMode,
    setThemeMode,
  };
});
