import { ImageGalleryContent } from "./image-gallery";
import { IContent } from "../interface";
import { PlatformContent } from "./platform";
import { ReleaseContent } from "./release";
import { ISanityClient } from "./sanity-client";
import { SettingsContent } from "./settings";
import { TagContent } from "./tag";
import { VideoContent } from "./video";
import { VideoGalleryContent } from "./video-gallery";
import { EventContent } from "./event";
import { LandingPageContent } from "./landing-page";

export const Content = ({
  sanityClient,
}: {
  sanityClient: ISanityClient;
}): IContent => {
  return {
    event: EventContent(sanityClient),
    videoGallery: VideoGalleryContent(sanityClient),
    video: VideoContent(sanityClient),
    tag: TagContent(sanityClient),
    imageGallery: ImageGalleryContent(sanityClient),
    release: ReleaseContent(sanityClient),
    platform: PlatformContent(sanityClient),
    settings: SettingsContent(sanityClient),
    landingPage: LandingPageContent(sanityClient),
  };
};
