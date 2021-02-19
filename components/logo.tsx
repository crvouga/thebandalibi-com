import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

type ILogoProps = {
  className?: string;
};

export const Logo = (props: ILogoProps) => {
  const theme = useTheme();
  return (
    <Typography
      style={{ letterSpacing: theme.spacing(1) }}
      variant="h5"
      color="initial"
      {...props}
    >
      ALIBI
    </Typography>
  );
};
