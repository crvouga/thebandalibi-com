export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  allVideoGalleries: () => `/video`,
  singleVideoGallery: (slug: string) => `/video/${slug}`,

  contentManagementDashboard: () =>
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/"
      : "https://the-band-alibi.sanity.studio/",

  store: () => "/store",
  singleProduct: (id: string | number) => `/store/product/${id}`,
  shoppingCart: () => "/store/cart",
  checkout: () => "/store/checkout",
};

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
