import { routes } from "../routes";

export const NAVIGATION_BAR_HEIGHT: string = "54px";

export const NAVIGATION_LINKS: {
  label: string;
  pathname: string;
}[] = [
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
];
