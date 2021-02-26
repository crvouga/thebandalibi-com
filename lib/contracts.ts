export type IVideo = {
  name: string;
  url: string;
};

export type IVideoGallery = {
  name: string;
  slug: string;
  videos: IVideo[];
};

export type IImage = {
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
  };
};

export type IGallery = {
  id: string;
  slug: string;
  name: string;
  images: IImage[];
};

export type IPlatform = {
  name: string;
  url: string;
  icon: IImage;
  logo: IImage;
};

export type IPlatformLink = {
  platform: IPlatform;
  url: string;
};

export type IRelease = {
  slug: string;
  title: string;
  artwork: string;
  url: string;
  releaseDate: string;
  platformLinks: IPlatformLink[];
};

export type ILandingPage = {
  heros: IHero[];
  videos: IVideo[];
};

export type IHero = {
  title: string;
  mainImage: string;
  callToAction: {
    title: string;
    url: string;
  };
};

export type ICMS = {
  getLandingPage: () => Promise<ILandingPage | null>;

  getPlatforms: () => Promise<IPlatform[]>;

  getVideos: () => Promise<IVideo[]>;

  getVideoGalleries: () => Promise<IVideoGallery[]>;
  getSingleVideoGallery: (slug: string) => Promise<IVideoGallery | null>;

  getGalleries: () => Promise<IGallery[]>;
  getSingleGallery: (slug: string) => Promise<IGallery | null>;

  getReleases: () => Promise<IRelease[]>;
  getSingleRelease: (slug: string) => Promise<IRelease | null>;
};
