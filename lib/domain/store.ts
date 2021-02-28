import {
  IImageGalleryStore,
  IPlatformStore,
  IReleaseStore,
  ISettingsStore,
  IVideoGalleryStore,
} from ".";

export type IStore = {
  imageGallery: IImageGalleryStore;
  videoGallery: IVideoGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  settings: ISettingsStore;
};
