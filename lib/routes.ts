export const routes = {
  landing: () => "/",

  allReleases: () => "/music",
  singleRelease: (slug: string) => `/music/${slug}`,

  allVideoGalleries: () => "/video",
  singleVideoGallery: (slug: string) => `/video/${slug}`,

  allImageGalleries: () => "/photo",
  singleImageGallery: (slug: string) => `/photo/${slug}`,

  contentManagmentDashboard: () => "/studio",
};
