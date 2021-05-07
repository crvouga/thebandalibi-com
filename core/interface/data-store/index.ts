import {
  IImageGallery,
  IPlatform,
  IProduct,
  IProductInfo,
  IRelease,
  ISettings,
  ITag,
  IVideo,
  IVideoGallery,
} from "../data";

export type IImageGalleryDataStore = {
  getAll: () => Promise<IImageGallery[]>;
  getOne: (slug: string) => Promise<IImageGallery | null>;
  getAllRelated: (slug: string) => Promise<IImageGallery[]>;
};

export type IPlatformDataStore = {
  getAll: () => Promise<IPlatform[]>;
};

export type IProductDataStore = {
  getAll(): Promise<IProduct[]>;
  getInfo(id: string): Promise<IProductInfo>;
};

export type IReleaseDataStore = {
  getAll: () => Promise<IRelease[]>;
  getOne: (slug: string) => Promise<IRelease | null>;
};

export type ISettingsDataStore = {
  get: () => Promise<ISettings>;
};

export type ITagDataStore = {
  getAll: () => Promise<ITag[]>;
};

export type IVideoGalleryDataStore = {
  getAll: () => Promise<IVideoGallery[]>;
  getOne: (slug: string) => Promise<IVideoGallery | null>;
  getAllRelated: (slug: string) => Promise<IVideoGallery[]>;
};

export type IVideoDataStore = {
  getAll: () => Promise<IVideo[]>;
  getAllByTagSlug: (tagSlug: string) => Promise<IVideo[]>;
};

export type IDataStore = {
  videoGallery: IVideoGalleryDataStore;
  video: IVideoDataStore;
  tag: ITagDataStore;
  imageGallery: IImageGalleryDataStore;
  release: IReleaseDataStore;
  platform: IPlatformDataStore;
  settings: ISettingsDataStore;
  product: IProductDataStore;
};
