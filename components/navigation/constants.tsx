import { SvgIconProps } from "@material-ui/core/SvgIcon";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
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

export const NAVIGATION_ACTIONS: INavigationAction[] = [
  {
    label: "Home",
    pathname: "/",
    OutlinedIcon: HomeOutlinedIcon,
    FilledIcon: HomeIcon,
  },
  {
    label: "Music",
    pathname: "/#music",
    OutlinedIcon: LibraryMusicOutlinedIcon,
    FilledIcon: LibraryMusicIcon,
  },
  {
    label: "Videos",
    pathname: "/#videos",
    FilledIcon: VideoLibraryIcon,
    OutlinedIcon: VideoLibraryOutlinedIcon,
  },
  {
    label: "Photos",
    pathname: "/#photos",
    FilledIcon: PhotoLibraryIcon,
    OutlinedIcon: PhotoLibraryOutlinedIcon,
  },
];
