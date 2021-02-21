export type IShowcase = {
  title: string;
  image: string;
  action: {
    title: string;
    url: string;
  };
};

export type IVideo = {
  id: string;
  name: string;
  url: string;
};

export type ISocialMedia = {
  name: string;
  url: string;
  image: string;
};

export type IGallery = {
  id: string;
  slug: string;
  name: string;
  images: string[];
};

export type IRelease = {
  id: string;
  name: string;
  artwork: string;
  url: string;
};

export type ICMS = {
  getShowcases: () => Promise<IShowcase[]>;
  getVideos: () => Promise<IVideo[]>;
  getSocialMedia: () => Promise<ISocialMedia[]>;
  getGalleries: () => Promise<IGallery[]>;
  getGallery: (slug: string) => Promise<IGallery | null>;
  getReleases: () => Promise<IRelease[]>;
};
