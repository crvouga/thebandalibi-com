import { appEventEmitter } from "@data-access";
import { Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useThemeModeContext } from "./use-theme-mode";

export const ToggleThemeButton = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();

  const title =
    themeMode === "light" ? "Switch Dark Theme" : "Switch Light Theme";

  return (
    <Tooltip title={title}>
      <IconButton
        color="inherit"
        aria-label="toggle theme"
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        {themeMode === "light" ? (
          <IoMdMoon color="inherit" />
        ) : (
          <IoMdSunny color="inherit" />
        )}
      </IconButton>
    </Tooltip>
  );
};
