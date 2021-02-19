import { GetStaticProps } from "next";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";
import { ShowcaseSection } from "../components/showcase";
import { SocialMediaSection } from "../components/social-media/social-media-section";
import { VideoCardSection } from "../components/videos/video-card-section";
import { cms } from "../lib/cms";
import { IGallery, IShowcase, ISocialMedia, IVideo } from "../lib/contracts";

type IIndexProps = {
  showcases: IShowcase[];
  videos: IVideo[];
  socialMedia: ISocialMedia[];
  galleries: IGallery[];
};

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  return {
    props: {
      showcases: await cms.getShowcases(),
      videos: await cms.getVideos(),
      socialMedia: await cms.getSocialMedia(),
      galleries: await cms.getGalleries(),
    },
  };
};

const Index = (props: IIndexProps) => {
  const { showcases, videos, socialMedia } = props;
  return (
    <PageLayout>
      <Meta />
      <ShowcaseSection showcases={showcases} />
      <SocialMediaSection socialMedia={socialMedia} />
      <VideoCardSection videos={videos} />
    </PageLayout>
  );
};

export default Index;
