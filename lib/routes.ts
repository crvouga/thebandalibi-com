export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allVideos: () => "/video",

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  contentManagementDashboard: () => "/studio",

  store: () => "/store",
  singleProduct: (id: string | number) => `/store/product/${id}`,
  shoppingCart: () => "/store/cart",
};
