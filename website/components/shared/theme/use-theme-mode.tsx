import constate from "constate";
import cookie from "js-cookie";
import { useEffect, useState } from "react";

export type IThemeState = "light" | "dark";

const KEY = "theme-mode";

const ThemeMode = (mode: unknown) => {
  if (typeof mode === "string" && (mode === "light" || mode === "dark")) {
    return mode;
  }

  return "light";
};

export const [ThemeModeContext, useThemeModeContext] = constate(() => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
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
