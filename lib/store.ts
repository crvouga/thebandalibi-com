import { SanityClient } from "@sanity/client";
import {
  ImageGalleryStoreSanity,
  PlatformStoreSanity,
  ReleaseStoreSanity,
  SettingsStoreSanity,
  VideoGalleryStoreSanity,
  VideoStoreSanity,
} from "./domain";
import { IStore } from "./domain/store";
import { sanityClient } from "./sanity-client";
import { TagStoreSanity } from "./domain/tag";

export const StoreSanity = (sanityClient: SanityClient): IStore => {
  return {
    video: VideoStoreSanity(sanityClient),
    tag: TagStoreSanity(sanityClient),
    imageGallery: ImageGalleryStoreSanity(sanityClient),
    videoGallery: VideoGalleryStoreSanity(sanityClient),
    release: ReleaseStoreSanity(sanityClient),
    platform: PlatformStoreSanity(sanityClient),
    settings: SettingsStoreSanity(sanityClient),
  };
};

export const store = StoreSanity(sanityClient);
