import { SanityClient } from "@sanity/client";
import {
  IImageGalleryStore,
  ILandingPageStore,
  ImageGalleryStoreSanity,
  IPlatformStore,
  IReleaseStore,
  IVideoGalleryStore,
  LandingPageStoreSanity,
  PlatformStoreSanity,
  ReleaseStoreSanity,
  VideoGalleryStoreSanity,
} from "./domain";
import { sanityClient } from "./sanity-client";

export type IStore = {
  imageGallery: IImageGalleryStore;
  videoGallery: IVideoGalleryStore;
  release: IReleaseStore;
  platform: IPlatformStore;
  landingPage: ILandingPageStore;
};

export const StoreSanity = (sanityClient: SanityClient): IStore => {
  return {
    imageGallery: ImageGalleryStoreSanity(sanityClient),
    videoGallery: VideoGalleryStoreSanity(sanityClient),
    release: ReleaseStoreSanity(sanityClient),
    platform: PlatformStoreSanity(sanityClient),
    landingPage: LandingPageStoreSanity(sanityClient),
  };
};

export const store = StoreSanity(sanityClient);
