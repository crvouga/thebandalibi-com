// import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { routes } from "routes";
// import {
//   HomeIcon,
//   ImageIcon,
//   ReleaseIcon,
//   StoreIcon,
//   VideoIcon,
// } from "../shared/icons";

export type INavigationAction = {
  label: string;
  pathname: string;
};

export const NAV_BAR_HEIGHT: string = "54px";

export const NAVIGATION_ACTIONS: INavigationAction[] = [
  {
    label: "Home",
    pathname: routes.landing(),
  },
  {
    label: "Store",
    pathname: routes.store(),
  },
  {
    label: "Videos",
    pathname: routes.allVideoGalleries(),
  },
  {
    label: "Photos",
    pathname: routes.allImageGalleries(),
  },
  {
    label: "Releases",
    pathname: routes.allReleases(),
  },
].filter((_) => _.pathname !== routes.store());
