import { SanityClient } from "@sanity/client";
import {
  IImageGalleryStore,
  ImageGalleryDataStoreSanity,
} from "./image-gallery";
import { IPlatformStore, PlatformDataStoreSanity } from "./platform";
import { IReleaseStore, ReleaseDataStoreSanity } from "./release";
import { ISettingsStore, SettingsDataStoreSanity } from "./settings";
import { ITagStore, TagDataStoreSanity } from "./tag";
import { IVideoStore, VideoDataStoreSanity } from "./video";

export type IStore = {
  video: IVideoStore;
  tag: ITagStore;
  imageGallery: IImageGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  settings: ISettingsStore;
};

export const DataStoreSanity = (sanityClient: SanityClient): IStore => {
  return {
    video: VideoDataStoreSanity(sanityClient),
    tag: TagDataStoreSanity(sanityClient),
    imageGallery: ImageGalleryDataStoreSanity(sanityClient),
    release: ReleaseDataStoreSanity(sanityClient),
    platform: PlatformDataStoreSanity(sanityClient),
    settings: SettingsDataStoreSanity(sanityClient),
  };
};
