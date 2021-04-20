import { printfulClient } from "../printful/printful-client";
import { sanityClient } from "../sanity/sanity-client";
import { ImageGalleryDataStoreSanity } from "./image-gallery";
import { PlatformDataStoreSanity } from "./platform";
import { ProductDataStore } from "./product";
import { ReleaseDataStoreSanity } from "./release";
import { SettingsDataStoreSanity } from "./settings";
import { TagDataStoreSanity } from "./tag";
import { VideoDataStoreSanity } from "./video";
import { VideoGalleryDataStoreSanity } from "./video-gallery";

const DataStore = () => {
  return {
    videoGallery: VideoGalleryDataStoreSanity(sanityClient),
    video: VideoDataStoreSanity(sanityClient),
    tag: TagDataStoreSanity(sanityClient),
    imageGallery: ImageGalleryDataStoreSanity(sanityClient),
    release: ReleaseDataStoreSanity(sanityClient),
    platform: PlatformDataStoreSanity(sanityClient),
    settings: SettingsDataStoreSanity(sanityClient),
    product: ProductDataStore(printfulClient),
  };
};

export const dataStore = DataStore();
