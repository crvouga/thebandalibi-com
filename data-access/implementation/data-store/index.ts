import { IDataStore } from "../../interface";
import { IPrintfulClient, ISanityClient } from "../frameworks";
import { ImageGalleryDataStoreSanity } from "./image-gallery";
import { PlatformDataStoreSanity } from "./platform";
import { ProductDataStorePrintful } from "./product";
import { ReleaseDataStoreSanity } from "./release";
import { SettingsDataStoreSanity } from "./settings";
import { TagDataStoreSanity } from "./tag";
import { VideoDataStoreSanity } from "./video";
import { VideoGalleryDataStoreSanity } from "./video-gallery";

export const DataStoreSanityPrintful = ({
  sanityClient,
  printfulClient,
}: {
  sanityClient: ISanityClient;
  printfulClient: IPrintfulClient;
}): IDataStore => {
  return {
    videoGallery: VideoGalleryDataStoreSanity(sanityClient),
    video: VideoDataStoreSanity(sanityClient),
    tag: TagDataStoreSanity(sanityClient),
    imageGallery: ImageGalleryDataStoreSanity(sanityClient),
    release: ReleaseDataStoreSanity(sanityClient),
    platform: PlatformDataStoreSanity(sanityClient),
    settings: SettingsDataStoreSanity(sanityClient),
    product: ProductDataStorePrintful(printfulClient),
  };
};
