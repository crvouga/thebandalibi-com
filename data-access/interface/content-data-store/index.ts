export type IUserAddedShoppingCartItemEvent = {
  type: "USER_ADDED_SHOPPING_CART_ITEM";
  payload: {
    variant: IProductVariant;
  };
};

export type IUserRemovedItem = {
  type: "USER_REMOVED_ITEM";
  payload: {
    variant: IProductVariant;
  };
};

export type IProduct = {
  id: string;
  name: string;
  thumbnailUrl: string;
  variantCount: number;
};

export type IProductVariant = {
  productId: string;
  id: string;
  name: string;
  retailPrice: number;
  currency: string;
  product: {
    image: string;
    name: string;
  };
  sku: string;
};

export type IProductInfo = {
  product: IProduct;
  variants: IProductVariant[];
};

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

export type IImageGalleryContentDataStore = {
  getAll: () => Promise<IImageGallery[]>;
  getOne: (slug: string) => Promise<IImageGallery | null>;
  getAllRelated: (slug: string) => Promise<IImageGallery[]>;
};

export type IPlatformContentDataStore = {
  getAll: () => Promise<IPlatform[]>;
};

export type IProductContentDataStore = {
  getAll(): Promise<IProduct[]>;
  getInfo(id: string): Promise<IProductInfo>;
};

export type IReleaseContentDataStore = {
  getAll: () => Promise<IRelease[]>;
  getOne: (slug: string) => Promise<IRelease | null>;
};

export type ISettingsContentDataStore = {
  get: () => Promise<ISettings>;
};

export type ITagContentDataStore = {
  getAll: () => Promise<ITag[]>;
};

export type IVideoGalleryContentDataStore = {
  getAll: () => Promise<IVideoGallery[]>;
  getOne: (slug: string) => Promise<IVideoGallery | null>;
  getAllRelated: (slug: string) => Promise<IVideoGallery[]>;
};

export type IVideoContentDataStore = {
  getAll: () => Promise<IVideo[]>;
  getAllByTagSlug: (tagSlug: string) => Promise<IVideo[]>;
};

export type IContentDataStore = {
  videoGallery: IVideoGalleryContentDataStore;
  video: IVideoContentDataStore;
  tag: ITagContentDataStore;
  imageGallery: IImageGalleryContentDataStore;
  release: IReleaseContentDataStore;
  platform: IPlatformContentDataStore;
  settings: ISettingsContentDataStore;
  product: IProductContentDataStore;
};
