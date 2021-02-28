import { SanityClient } from "@sanity/client";
import {
  ImageGalleryStoreSanity,
  PlatformStoreSanity,
  ReleaseStoreSanity,
  SettingsStoreSanity,
  VideoStoreSanity,
} from "./domain";
import { IStore } from "./domain/store";
import { TagStoreSanity } from "./domain/tag";
import { sanityClient } from "./sanity-client";
export const StoreSanity = (sanityClient: SanityClient): IStore => {
  return {
    video: VideoStoreSanity(sanityClient),
    tag: TagStoreSanity(sanityClient),
    imageGallery: ImageGalleryStoreSanity(sanityClient),
    release: ReleaseStoreSanity(sanityClient),
    platform: PlatformStoreSanity(sanityClient),
    settings: SettingsStoreSanity(sanityClient),
  };
};

export const store = StoreSanity(sanityClient);
