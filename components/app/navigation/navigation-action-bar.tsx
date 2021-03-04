import { makeStyles } from "@material-ui/core";
import BottomNavigation, {
  BottomNavigationProps,
} from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";

import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";
import { forwardRef } from "react";
import { ClickableLink } from "../../@shared/clickable";

export const NavigationAction = ({
  href,
  ...BottomNavigationActionProps
}: BottomNavigationActionProps & { href: string }) => {
  return (
    <ClickableLink href={href}>
      <BottomNavigationAction {...BottomNavigationActionProps} />
    </ClickableLink>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "inherit",
    zIndex: theme.zIndex.appBar,
  },
}));

const equalBy = <T,>(keyFn: (x: T) => string | number, x1: T, x2: T) =>
  keyFn(x1) === keyFn(x2);

const toRootPath = (pathname: string) => pathname.split("/")[1];

export const NavigationActionBar = forwardRef<
  HTMLDivElement | null,
  BottomNavigationProps
>((props, ref) => {
  const router = useRouter();
  const classes = useStyles();

  const selected = NAVIGATION_ACTIONS.find((action) =>
    equalBy(toRootPath, router.pathname, action.pathname)
  );

  return (
    <BottomNavigation
      ref={ref}
      showLabels
      value={selected?.pathname}
      className={classes.root}
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
              equalBy(toRootPath, String(selected?.pathname), pathname) ? (
                <FilledIcon />
              ) : (
                <OutlinedIcon />
              )
            }
          />
        )
      )}
    </BottomNavigation>
  );
});
