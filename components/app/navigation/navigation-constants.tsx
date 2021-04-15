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

export const NAVIGATION_ACTIONS: INavigationAction[] =
  process.env.NODE_ENV === "production"
    ? [
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
      ]
    : [
        {
          label: "Home",
          pathname: "/",
          Icon: HomeIcon,
        },
        {
          label: "Store",
          pathname: "/store",
          Icon: StoreIcon,
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
