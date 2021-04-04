import { SanityClient } from "@sanity/client";
import { IPrintfulClient, printfulClient } from "../printful/printful-client";
import { ImageGalleryDataStoreSanity } from "./image-gallery";
import { PlatformDataStoreSanity } from "./platform";
import { ProductDataStore } from "./product";
import { ReleaseDataStoreSanity } from "./release";
import { sanityClient } from "../sanity/sanity-client";
import { SettingsDataStoreSanity } from "./settings";
import { TagDataStoreSanity } from "./tag";
import { VideoDataStoreSanity } from "./video";

export const DataStore = ({
  printfulClient,
  sanityClient,
}: {
  printfulClient: IPrintfulClient;
  sanityClient: SanityClient;
}) => {
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
