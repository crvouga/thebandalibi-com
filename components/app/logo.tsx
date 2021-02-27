import { useTheme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { routes } from "../../constants/routes";
import { ClickableLink } from "../@shared/clickable";

type ILogoProps = {
  className?: string;
};

const useStyles = makeStyles((theme) => ({
  logo: {
    letterSpacing: theme.spacing(1),
    cursor: "pointer",
  },
}));

export const Logo = (props: ILogoProps) => {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <ClickableLink href={routes.overview()}>
      <Typography className={classes.logo} variant="h5" {...props}>
        ALIBI
      </Typography>
    </ClickableLink>
  );
};
