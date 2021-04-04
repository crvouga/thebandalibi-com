import { SvgIconProps } from "@material-ui/core/SvgIcon";
import {
  ShopIcon,
  HomeIcon,
  ImageIcon,
  ReleaseIcon,
  VideoIcon,
} from "../shared/icons";

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
    label: "Shop",
    pathname: "/shop",
    Icon: ShopIcon,
  },
  {
    label: "Music",
    pathname: "/music",
    Icon: ReleaseIcon,
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
];
