import { SvgIconProps } from "@material-ui/core/SvgIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";

export type INavigationAction = {
  label: string;
  pathname: string;
  OutlinedIcon: React.FC<SvgIconProps>;
  FilledIcon: React.FC<SvgIconProps>;
};

export const NAV_BAR_HEIGHT: string = "58px";

export const NAVIGATION_ACTIONS: INavigationAction[] = [
  {
    label: "Overview",
    pathname: "/",
    OutlinedIcon: DashboardOutlinedIcon,
    FilledIcon: DashboardIcon,
  },
  {
    label: "Music",
    pathname: "/music",
    OutlinedIcon: LibraryMusicOutlinedIcon,
    FilledIcon: LibraryMusicIcon,
  },
  {
    label: "Video",
    pathname: "/video",
    FilledIcon: VideoLibraryIcon,
    OutlinedIcon: VideoLibraryOutlinedIcon,
  },
  {
    label: "Photo",
    pathname: "/photo",
    FilledIcon: PhotoLibraryIcon,
    OutlinedIcon: PhotoLibraryOutlinedIcon,
  },
];
