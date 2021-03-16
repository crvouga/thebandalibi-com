import { makeStyles } from "@material-ui/core";
import BottomNavigation, { BottomNavigationProps } from "@material-ui/core/BottomNavigation";
import BottomNavigationAction, { BottomNavigationActionProps } from "@material-ui/core/BottomNavigationAction";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { ClickableLink } from "../shared/clickable";
import { NAVIGATION_ACTIONS, NAV_BAR_HEIGHT } from "./navigation-constants";
  ...BottomNavigationActionProps
}: BottomNavigationActionProps & { href: string }) => {
  const classes = useStyles();
  return (
    <ClickableLink href={href} className={classes.width100}>
      <BottomNavigationAction
        className={classes.width100}
        {...BottomNavigationActionProps}
      />
    </ClickableLink>
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
