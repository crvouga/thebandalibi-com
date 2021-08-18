import { PlatformIcon, Button, IButtonProps } from "@components/generic";
import { useTheme } from "@material-ui/core";

const nameToColor = {
  google: "#487FE2",
};

export const PlatformButton = ({
  platformName,
  ...ButtonProps
}: IButtonProps & { platformName: string }) => {
  const theme = useTheme();
  if (platformName === "google") {
    return (
      <Button
        startIcon={<PlatformIcon platformName={platformName} />}
        sx={{
          color: theme.palette.getContrastText(nameToColor.google),
          backgroundColor: nameToColor.google,
          "&:active, &:focus, &:hover": {
            backgroundColor: nameToColor.google,
          },
        }}
        {...ButtonProps}
      >
        {platformName}
      </Button>
    );
  }

  return null;
};
