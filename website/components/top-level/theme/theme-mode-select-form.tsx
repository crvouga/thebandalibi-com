import { ChipSelection } from "@components/generic";
import Typography from "@material-ui/core/Typography";
import { IThemeMode, useThemeModeContext } from "./theme-mode-context";
import { ThemeModeIcon } from "./theme-mode-icon";

const themeModeToLabel: { [themeMode in IThemeMode]: string } = {
  light: "Light",
  dark: "Dark",
  // system: "System",
};

const THEME_MODES: IThemeMode[] = ["light", "dark"];

export const ThemeModeSelectForm = () => {
  const { themeMode, setThemeMode } = useThemeModeContext();

  if (true) {
    return null;
  }

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
