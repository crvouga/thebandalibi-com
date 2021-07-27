import { IoMdMoon, IoMdSettings, IoMdSunny } from "react-icons/io";
import { IThemeMode } from "./use-theme-mode";

export const ThemeModeIcon = ({ themeMode }: { themeMode: IThemeMode }) => {
  switch (themeMode) {
    case "system":
      return <IoMdSettings color="inherit" />;

    case "light":
      return <IoMdSunny color="inherit" />;

    case "dark":
      return <IoMdMoon color="inherit" />;
  }
};
