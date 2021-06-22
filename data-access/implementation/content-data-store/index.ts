import { IContentDataStore } from "../../interface";
import { IPrintfulClient, ISanityClient } from "../frameworks";
import { ImageGalleryContentDataStoreSanity } from "./image-gallery";
import { PlatformContentDataStoreSanity } from "./platform";
import { ProductContentDataStorePrintful } from "./product";
import { ReleaseContentDataStoreSanity } from "./release";
import { SettingsContentDataStoreSanity } from "./settings";
import { TagContentDataStoreSanity } from "./tag";
import { VideoContentDataStoreSanity } from "./video";
import { VideoGalleryContentDataStoreSanity } from "./video-gallery";

export const ContentDataStoreSanityPrintful = ({
  sanityClient,
  printfulClient,
}: {
  sanityClient: ISanityClient;
  printfulClient: IPrintfulClient;
}): IContentDataStore => {
  return {
    videoGallery: VideoGalleryContentDataStoreSanity(sanityClient),
    video: VideoContentDataStoreSanity(sanityClient),
    tag: TagContentDataStoreSanity(sanityClient),
    imageGallery: ImageGalleryContentDataStoreSanity(sanityClient),
    release: ReleaseContentDataStoreSanity(sanityClient),
    platform: PlatformContentDataStoreSanity(sanityClient),
    settings: SettingsContentDataStoreSanity(sanityClient),
    product: ProductContentDataStorePrintful(printfulClient),
  };
};
