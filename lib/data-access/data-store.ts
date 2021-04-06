import { printfulClient } from "../printful/printful-client";
import { ImageGalleryDataStoreSanity } from "./image-gallery";
import { PlatformDataStoreSanity } from "./platform";
import { ProductDataStore } from "./product";
import { ReleaseDataStoreSanity } from "./release";
import { sanityClient } from "../sanity/sanity-client";
import { SettingsDataStoreSanity } from "./settings";
import { TagDataStoreSanity } from "./tag";
import { VideoDataStoreSanity } from "./video";

const DataStore = () => {
  return {
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
