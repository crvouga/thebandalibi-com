export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allVideos: () => "/video",

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  contentManagmentDashboard: () => "/studio",

  shop: () => "/shop",
  singleShopProduct: (id: string | number) => `/shop/product/${id}`,
  shoppingCart: () => "/shop/cart",
};
