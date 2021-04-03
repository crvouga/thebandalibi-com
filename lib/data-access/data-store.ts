import { SanityClient } from "@sanity/client";
import {
  IImageGalleryDataStore,
  ImageGalleryDataStoreSanity,
} from "./image-gallery";
import { IPlatformDataStore, PlatformDataStoreSanity } from "./platform";
import { IPrintfulClient, printfulClient } from "./printful-client";
import { IProductDataStore, ProductDataStore } from "./product";
import { IReleaseDataStore, ReleaseDataStoreSanity } from "./release";
import { sanityClient } from "./sanity-client";
import { ISettingsDataStore, SettingsDataStoreSanity } from "./settings";
import { ITagDataStore, TagDataStoreSanity } from "./tag";
import { IVideoDataStore, VideoDataStoreSanity } from "./video";

export type IDataStore = {
  video: IVideoDataStore;
  tag: ITagDataStore;
  imageGallery: IImageGalleryDataStore;
  release: IReleaseDataStore;
  platform: IPlatformDataStore;
  settings: ISettingsDataStore;
  products: IProductDataStore;
};

export const DataStore = ({
  printfulClient,
  sanityClient,
}: {
  printfulClient: IPrintfulClient;
  sanityClient: SanityClient;
}): IDataStore => {
  return {
    video: VideoDataStoreSanity(sanityClient),
    tag: TagDataStoreSanity(sanityClient),
    imageGallery: ImageGalleryDataStoreSanity(sanityClient),
    release: ReleaseDataStoreSanity(sanityClient),
    platform: PlatformDataStoreSanity(sanityClient),
    settings: SettingsDataStoreSanity(sanityClient),
    products: ProductDataStore(printfulClient),
  };
};

export const dataStore = DataStore({
  sanityClient,
  printfulClient,
});
