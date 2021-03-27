import { Divider, makeStyles } from "@material-ui/core";
import BottomNavigation, {
  BottomNavigationProps,
} from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, {
  BottomNavigationActionProps,
} from "@material-ui/core/BottomNavigationAction";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS, NAV_BAR_HEIGHT } from "./navigation-constants";
import { forwardRef } from "react";
import Link from "next/link";

const useStylesBottomNavigation = makeStyles((theme) => ({
  root: {
    // boxSizing: "border-box",
    height: NAV_BAR_HEIGHT,
    zIndex: theme.zIndex.appBar,
    borderTop: `${theme.spacing(1 / 4)}px solid ${theme.palette.divider}`,
  },
}));

const useStylesBottomNavigationAction = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.palette.text.primary,
  },
}));

export const NavigationAction = ({
  href,
  ...BottomNavigationActionProps
}: BottomNavigationActionProps & { href: string }) => {
  const classes = useStylesBottomNavigationAction();
  return (
    <Link href={href}>
      <BottomNavigationAction
        classes={classes}
        {...BottomNavigationActionProps}
      />
    </Link>
  );
};

const equalBy = <T,>(keyFn: (x: T) => string | number, x1: T, x2: T) =>
  keyFn(x1) === keyFn(x2);

const toRootPath = (pathname: string) => pathname.split("/")[1];

export const NavigationActionBar = forwardRef<
  HTMLDivElement | null,
  BottomNavigationProps
>((props, ref) => {
  const router = useRouter();
  const classes = useStylesBottomNavigation();

  const selected = NAVIGATION_ACTIONS.find((action) =>
    equalBy(toRootPath, router.pathname, action.pathname)
  );

  return (
    <BottomNavigation
      ref={ref}
      showLabels
      value={selected?.pathname}
      classes={classes}
      {...props}
    >
      {NAVIGATION_ACTIONS.map(({ pathname, Icon, label }) => (
        <NavigationAction
          key={pathname}
          value={pathname}
          href={pathname}
          label={label}
          icon={<Icon />}
        />
      ))}
    </BottomNavigation>
  );
});
