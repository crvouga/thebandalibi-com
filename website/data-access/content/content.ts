import { ISanityClient } from "../third-party-services";
import { ImageGalleryContent } from "./image-gallery";
import { IContent } from "./interface";
import { PlatformContent } from "./platform";
import { ReleaseContent } from "./release";
import { SettingsContent } from "./settings";
import { TagContent } from "./tag";
import { VideoContent } from "./video";
import { VideoGalleryContent } from "./video-gallery";

export const Content = ({
  sanityClient,
}: {
  sanityClient: ISanityClient;
}): IContent => {
  return {
    videoGallery: VideoGalleryContent(sanityClient),
    video: VideoContent(sanityClient),
    tag: TagContent(sanityClient),
    imageGallery: ImageGalleryContent(sanityClient),
    release: ReleaseContent(sanityClient),
    platform: PlatformContent(sanityClient),
    settings: SettingsContent(sanityClient),
  };
};
