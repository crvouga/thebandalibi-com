import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  typography: {
    cursor: "pointer",
    padding: theme.spacing(1),
    "&:hover": {
      opacity: 0.8,
      textDecoration: "underline",
    },
  },

  highlighted: {
    textDecoration: "underline",
  },

  link: {},
}));

type INavigationLinkProps = {
  label: string;
  href: string;
  highlighted?: boolean;
};

export const NavigationLink = (props: INavigationLinkProps) => {
  const { label, href, highlighted } = props;

  const classes = useStyles();

  return (
    <Link href={href}>
      <Typography
        className={clsx(classes.typography, {
          [classes.highlighted]: highlighted,
        })}
      >
        {label.toUpperCase()}
      </Typography>
    </Link>
  );
};
