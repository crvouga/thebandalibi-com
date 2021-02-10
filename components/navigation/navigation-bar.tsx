import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_LINKS } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderBottom: `solid 2px ${theme.palette.divider}`,
  },
  logo: {
    flex: 1,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Tabs centered className={classes.root}>
      {NAVIGATION_LINKS.map(({ OutlinedIcon, FilledIcon, pathname, label }) => (
        <Link key={pathname} href={pathname}>
          <Tab
            selected={router.pathname === pathname}
            icon={
              router.pathname === pathname ? <FilledIcon /> : <OutlinedIcon />
            }
            label={label}
          />
        </Link>
      ))}
    </Tabs>
  );
};
