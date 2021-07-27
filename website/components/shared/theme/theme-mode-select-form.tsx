import { ChipSelection } from "@components/generic";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ThemeModeIcon } from "./theme-mode-icon";
import { IThemeMode, useThemeModeContext } from "./use-theme-mode";

const themeModeToLabel: { [themeMode in IThemeMode]: string } = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const THEME_MODES: IThemeMode[] = ["light", "dark", "system"];

export const ThemeModeSelectForm = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();

  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        Theme
      </Typography>

      <ChipSelection
        toAvatar={(mode) => <ThemeModeIcon themeMode={mode} />}
        onSelect={(mode) => setThemeMode(mode)}
        isSelected={(mode) => mode === themeMode}
        toLabel={(mode) => themeModeToLabel[mode]}
        toKey={(mode) => mode}
        items={THEME_MODES}
      />
    </>
  );
};
