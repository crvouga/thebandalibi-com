import { SanityClient } from "@sanity/client";
import {
  ImageGalleryDataStoreSanity,
  PlatformDataStoreSanity,
  ReleaseDataStoreSanity,
  SettingsDataStoreSanity,
  VideoDataStoreSanity,
} from "./data-access";
import { IStore } from "./data-access/store";
import { TagDataStoreSanity } from "./data-access/tag";
import { sanityClient } from "./sanity-client";

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

export const dataStore = DataStoreSanity(sanityClient);
