import { makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";

export const NavigationBarBottomAction = ({
  href,
  ...BottomNavigationActionProps
}: BottomNavigationActionProps & { href: string }) => {
  return (
    <Link href={href}>
      <BottomNavigationAction {...BottomNavigationActionProps} />
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw",
    zIndex: theme.zIndex.appBar,
  },
}));

export const NavigationBarBottom = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      color="secondary"
      className={classes.root}
      value={router.pathname}
    >
      {NAVIGATION_ACTIONS.map(
        ({ pathname, OutlinedIcon, FilledIcon, label }) => (
          <NavigationBarBottomAction
            key={pathname}
            value={pathname}
            color="secondary"
            href={pathname}
            label={label}
            icon={
              router.pathname === pathname ? <FilledIcon /> : <OutlinedIcon />
            }
          />
        )
      )}
    </BottomNavigation>
  );
};
