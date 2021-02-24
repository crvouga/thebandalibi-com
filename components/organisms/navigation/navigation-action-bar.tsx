import { makeStyles } from "@material-ui/core";
import BottomNavigation, {
  BottomNavigationProps,
} from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";

export const NavigationAction = ({
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
  root: {},
}));

export const NavigationActionBar = (props: BottomNavigationProps) => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <BottomNavigation
      showLabels
      className={classes.root}
      value={router.pathname}
      {...props}
    >
      {NAVIGATION_ACTIONS.map(
        ({ pathname, OutlinedIcon, FilledIcon, label }) => (
          <NavigationAction
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
