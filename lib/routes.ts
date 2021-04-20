export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allVideos: () => "/video",

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
