import { INonNegativeNumber } from "@utility";

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

export type IHero = {
  title: string;
  subtitle: string;
  mainImage: IImage;
  callToAction: {
    title: string;
    url: string;
  };
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
  authorUrl: string;
  keywords: string[];
};

type ILandingPageSettings = {
  heros: IHero[];
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

export type IEvent = {
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
  throw new Error("Failed to cast to event sort");
};

export type IContent = {
  event: {
    getAll: ({
      sort,
    }: {
      sort: IEventSort;
      slice?: {
        offset: INonNegativeNumber;
        limit: INonNegativeNumber;
      };
    }) => Promise<IEvent[]>;

    getOne: ({
      eventId,
    }: {
      eventId: string;
    }) => Promise<{ event: IEvent } | null>;
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
