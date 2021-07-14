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

  // {
  //   label: "Media",
  //   pathname: routes.media(),
  // },

  {
    label: "Store",
    pathname: routes.store(),
  },
];
