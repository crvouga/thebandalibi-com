import { IContent } from "./interface";
import { IPrintfulClient, ISanityClient } from "../frameworks";
import { ImageGalleryContent } from "./image-gallery";
import { PlatformContent } from "./platform";
import { ProductContent } from "./product";
import { ReleaseContent } from "./release";
import { SettingsContent } from "./settings";
import { TagContent } from "./tag";
import { VideoContent } from "./video";
import { VideoGalleryContent } from "./video-gallery";

export const Content = ({
  sanityClient,
  printfulClient,
}: {
  sanityClient: ISanityClient;
  printfulClient: IPrintfulClient;
}): IContent => {
  return {
    videoGallery: VideoGalleryContent(sanityClient),
    video: VideoContent(sanityClient),
    tag: TagContent(sanityClient),
    imageGallery: ImageGalleryContent(sanityClient),
    release: ReleaseContent(sanityClient),
    platform: PlatformContent(sanityClient),
    settings: SettingsContent(sanityClient),
    product: ProductContent(printfulClient),
  };
};
