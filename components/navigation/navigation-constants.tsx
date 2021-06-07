import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { routes } from "routes";
import {
  HomeIcon,
  ImageIcon,
  ReleaseIcon,
  StoreIcon,
  VideoIcon,
} from "../shared/icons";

export type INavigationAction = {
  label: string;
  pathname: string;
  Icon: React.FC<SvgIconProps>;
};

export const NAV_BAR_HEIGHT: string = "54px";

export const NAVIGATION_ACTIONS: INavigationAction[] = [
  {
    label: "Home",
    pathname: routes.landing(),
    Icon: HomeIcon,
  },
  {
    label: "Store",
    pathname: routes.store(),
    Icon: StoreIcon,
  },
  {
    label: "Videos",
    pathname: routes.allVideoGalleries(),
    Icon: VideoIcon,
  },
  {
    label: "Photos",
    pathname: routes.allImageGalleries(),
    Icon: ImageIcon,
  },
  {
    label: "Releases",
    pathname: routes.allReleases(),
    Icon: ReleaseIcon,
  },
].filter((_) => _.pathname !== routes.store());
