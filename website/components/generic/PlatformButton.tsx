import { Button, IButtonProps } from "@components/generic";
import Avatar from "@material-ui/core/Avatar";

export const PlatformButton = ({
  platformName,
  appIconSrc,
  children,
  ...ButtonProps
}: IButtonProps & {
  appIconSrc: string;
  platformName: string;
}) => {
  return (
    <Button
      startIcon={
        <Avatar
          variant="rounded"
          alt={platformName}
          src={appIconSrc}
          sx={{
            width: "24px",
            height: "24px",
          }}
        />
      }
      fullWidth
      variant="outlined"
      color="inherit"
      {...ButtonProps}
    >
      {children ? children : platformName}
    </Button>
  );
};
