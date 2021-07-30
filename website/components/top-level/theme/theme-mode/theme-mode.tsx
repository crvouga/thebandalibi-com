import useDarkMode from "use-dark-mode";

export type IThemeMode = "light" | "dark";

export const ThemeMode = (mode: unknown): IThemeMode => {
  if (mode === "light" || mode === "dark") {
    return mode;
  }

  return "light";
};

export const useThemeMode = () => {
  const darkMode = useDarkMode(true);

  const themeMode: IThemeMode = darkMode.value ? "dark" : "light";

  const setThemeMode = (themeMode: IThemeMode) => {
    switch (themeMode) {
      case "light": {
        darkMode.disable();
        break;
      }

      case "dark": {
        darkMode.enable();
        break;
      }
    }
  };

  return {
    themeMode,
    setThemeMode,
  };
};
