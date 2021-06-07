export * from "./product";

export type IImage = {
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
      aspectRatio: number;
    };
    palette: {
      dominant: {
        background: string;
        foreground: string;
      };
    };
  };
};

export type IHero = {
  title: string;
  mainImage: IImage;
  backgroundImage: IImage;
  callToAction: {
    title: string;
    url: string;
  };
};

export type IImageGallery = {
  slug: string;
  name: string;
  images: IImage[];
  imageCount: number;
};

export type IPlatform = {
  name: string;
};

export type IPlatformLink = {
  platform: IPlatform;
  url: string;
};

export type IRelease = {
  slug: string;
  title: string;
  artwork: string;
  releaseDate: string;
  videos: IVideo[];
  platformLinks: IPlatformLink[];
};

type IBandSettings = {
  name: string;
  description: string;
  platformLinks: IPlatformLink[];
  logo: IImage;
  contactEmailAddress: string;
};

type IWebsiteSettings = {
  url: string;
  author: string;
  authorLink: string;
  keywords: string[];
};

type ILandingPageSettings = {
  heros: IHero[];
  videoGalleries: IVideoGallery[];
  imageGalleries: IImageGallery[];
};

export type ISettings = {
  band: IBandSettings;
  website: IWebsiteSettings;
  landingPage: ILandingPageSettings;
};

export type ITag = {
  name: string;
  slug: string;
  videoCount: number;
};

export type IVideoGallery = {
  name: string;
  slug: string;
  videos: IVideo[];
  videoCount: number;
};

export type IVideo = {
  name: string;
  tags: ITag[];
  url: string;
};
