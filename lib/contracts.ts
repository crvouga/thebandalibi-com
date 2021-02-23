export type IVideo = {
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
  title: string;
  artwork: string;
  url: string;
  releaseDate: string;
};

export type ILandingPage = {
  heros: IHero[];
  videos: IVideo[];
};

export type IHero = {
  title: string;
  mainImage: string;
  backgroundVideo?: string;
  callToAction: {
    title: string;
    url: string;
  };
};

export type ICMS = {
  getLandingPage: () => Promise<ILandingPage | null>;
  getVideos: () => Promise<IVideo[]>;
  getSocialMedia: () => Promise<ISocialMedia[]>;
  getGalleries: () => Promise<IGallery[]>;
  getGallery: (slug: string) => Promise<IGallery | null>;
  getReleases: () => Promise<IRelease[]>;
};
