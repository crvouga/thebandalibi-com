import { SanityClient } from "@sanity/client";
import {
  IImageGalleryStore,
  ImageGalleryDataStoreSanity,
} from "./image-gallery";
import { IPlatformStore, PlatformDataStoreSanity } from "./platform";
import { IReleaseStore, ReleaseDataStoreSanity } from "./release";
import { sanityClient } from "./sanity-client";
import { ISettingsStore, SettingsDataStoreSanity } from "./settings";
import { ITagStore, TagDataStoreSanity } from "./tag";
import { IVideoStore, VideoDataStoreSanity } from "./video";

export type IDataStore = {
  video: IVideoStore;
  tag: ITagStore;
  imageGallery: IImageGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  settings: ISettingsStore;
};

export const DataStoreSanity = (sanityClient: SanityClient): IDataStore => {
  return {
    video: VideoDataStoreSanity(sanityClient),
    tag: TagDataStoreSanity(sanityClient),
    imageGallery: ImageGalleryDataStoreSanity(sanityClient),
    release: ReleaseDataStoreSanity(sanityClient),
    platform: PlatformDataStoreSanity(sanityClient),
    settings: SettingsDataStoreSanity(sanityClient),
  };
};

export const dataStore = DataStoreSanity(sanityClient);
