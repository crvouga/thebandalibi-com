import { SanityClient } from "@sanity/client";
import {
  IImageGalleryStore,
  ImageGalleryStoreSanity,
  IPlatformStore,
  IReleaseStore,
  ISettingsStore,
  IVideoGalleryStore,
  PlatformStoreSanity,
  ReleaseStoreSanity,
  SettingsStoreSanity,
  VideoGalleryStoreSanity,
} from "./domain";
import { sanityClient } from "./sanity-client";

export type IStore = {
  imageGallery: IImageGalleryStore;
  videoGallery: IVideoGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  settings: ISettingsStore;
};

export const StoreSanity = (sanityClient: SanityClient): IStore => {
  return {
    imageGallery: ImageGalleryStoreSanity(sanityClient),
    videoGallery: VideoGalleryStoreSanity(sanityClient),
    release: ReleaseStoreSanity(sanityClient),
    platform: PlatformStoreSanity(sanityClient),
    settings: SettingsStoreSanity(sanityClient),
  };
};

export const store = StoreSanity(sanityClient);
