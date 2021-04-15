import { SvgIconProps } from "@material-ui/core/SvgIcon";
import {
  HomeIcon,
  ImageIcon,
  ReleaseIcon,
  StoreIcon,
  VideoIcon,
} from "../../shared/icons";

export type INavigationAction = {
  label: string;
  pathname: string;
  Icon: React.FC<SvgIconProps>;
};

export const NAV_BAR_HEIGHT: string = "58px";

export const NAVIGATION_ACTIONS: INavigationAction[] = [
  {
    label: "Home",
    pathname: "/",
    Icon: HomeIcon,
  },
  {
    label: "Video",
    pathname: "/video",
    Icon: VideoIcon,
  },
  {
    label: "Photo",
    pathname: "/photo",
    Icon: ImageIcon,
  },
  {
    label: "Release",
    pathname: "/release",
    Icon: ReleaseIcon,
  },
];

if (process.env.NODE_ENV === "development") {
  NAVIGATION_ACTIONS.push({
    label: "Store",
    pathname: "/store",
    Icon: StoreIcon,
  });
}
