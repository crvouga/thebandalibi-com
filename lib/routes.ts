export const routes = {
  landing: () => "/",

  allReleases: () => "/music",
  singleRelease: (slug: string) => `/music/${slug}`,

  allVideos: () => "/video",

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  contentManagmentDashboard: () => "/studio",

  shop: () => "/shop",
};
