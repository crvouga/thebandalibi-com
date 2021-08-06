import { IDateISO, INonNegativeNumber } from "@utility";

type IImageMetadata = {
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  };
};

export type IImage = {
  url: string;
  metadata: IImageMetadata;
};

export type _IHero = {
  title: string;
  subtitle: string;
  mainImage: IImage;
  callToAction: {
    title: string;
    url: string;
  };
};

export type IHero = {
  logo: IImage;
  title: string;
  subtitle: string;
  action: {
    title: string;
    url: string;
  };
  images: IImage[];
};

export type ILandingPage = {
  hero: IHero;
};

export type IImageGallery = {
  slug: string;
  name: string;
  thumbnail: IImage;
  images: IImage[];
  imageCount: number;
};

export type IPlatform = {
  name: string;
  appIconUrl: string;
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
  icon: IImage;
  contactEmailAddress: string;
};

type IWebsiteSettings = {
  url: string;
  author: string;
  authorUrl: string;
  keywords: string[];
};

type ILandingPageSettings = {
  heros: _IHero[];
  videos: IVideo[];
  videoGalleries: IVideoGallery[];
  imageGalleries: IImageGallery[];
};

export type ISettings = {
  band: IBandSettings;
  website: IWebsiteSettings;
  landingPage: ILandingPageSettings;
  contentManagementDashboardUrl: string;
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
  thumbnail: IImage;
  videoCount: number;
};

export type IVideo = {
  name: string;
  url: string;
};

export type __IEvent = {
  eventId: string;
  name: string;
  date: string;
  imageGalleries: IImageGallery[];
  videos: IVideo[];
};

export type IEventSort = "date-ascend" | "date-descend";

export const EventSort = (sort: unknown): IEventSort => {
  if (sort === "date-ascend" || sort === "date-descend") {
    return sort;
  }
  return "date-descend";
};

type IEventGetAllParams = {
  sort: IEventSort;
  inclusiveDateRange?: {
    start: IDateISO;
    end: IDateISO;
  };
  slice?: {
    offset: INonNegativeNumber;
    limit: INonNegativeNumber;
  };
};

export type IContent = {
  event: {
    getAll: (params: IEventGetAllParams) => Promise<__IEvent[]>;
  };

  landingPage: {
    get: () => Promise<ILandingPage>;
  };

  videoGallery: {
    getAll: () => Promise<IVideoGallery[]>;
    getOne: (slug: string) => Promise<IVideoGallery | null>;
    getAllRelated: (slug: string) => Promise<IVideoGallery[]>;
  };

  video: {
    getAll: () => Promise<IVideo[]>;
    getAllByTagSlug: (tagSlug: string) => Promise<IVideo[]>;
  };

  tag: {
    getAll: () => Promise<ITag[]>;
  };

  imageGallery: {
    getAll: () => Promise<IImageGallery[]>;
    getOne: (slug: string) => Promise<IImageGallery | null>;
    getAllRelated: (slug: string) => Promise<IImageGallery[]>;
  };

  release: {
    getAll: () => Promise<IRelease[]>;
    getOne: (slug: string) => Promise<IRelease | null>;
  };

  platform: {
    getAll: () => Promise<IPlatform[]>;
  };

  settings: {
    get: () => Promise<ISettings>;
  };
};
