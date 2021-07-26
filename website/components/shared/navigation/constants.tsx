import { routes } from "../routes";

// export const NAVIGATION_BAR_HEIGHT: string = "54px";

export const NAVIGATION_LINKS: {
  label: string;
  pathname: string;
}[] = [
  {
    label: "Home",
    pathname: routes.landing(),
  },

  {
    label: "Music",
    pathname: routes.allReleases(),
  },

  {
    label: "Photos",
    pathname: routes.allImageGalleries(),
  },

  {
    label: "Videos",
    pathname: routes.allVideoGalleries(),
  },

  // {
  //   label: "Calender",
  //   pathname: routes.calender(),
  // },

  {
    label: "Shop",
    pathname: routes.store(),
  },
];
