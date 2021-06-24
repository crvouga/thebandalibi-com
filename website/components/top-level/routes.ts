export const routes = {
  landing: () => "/",

  allReleases: () => "/release",
  singleRelease: (slug: string) => `/release/${slug}`,

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  allVideoGalleries: () => `/video`,
  singleVideoGallery: (slug: string) => `/video/${slug}`,

  store: () => "/store",
  singleProduct: (id: string | number) => `/store/product/${id}`,
  shoppingCart: () => "/store/cart",
  checkout: () => "/store/checkout",
};
