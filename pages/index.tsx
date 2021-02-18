import { GetStaticProps } from "next";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";
import { Showcases } from "../components/showcase";
import { SocialMedia } from "../components/social-media/social-media";
import { VideoCardSection } from "../components/videos/video-card-section";
import { cms } from "../lib/cms";
import { IShowcase, ISocialMedia, IVideo } from "../lib/contracts";

type IIndexProps = {
  showcases: IShowcase[];
  videos: IVideo[];
  socialMedia: ISocialMedia[];
};

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  return {
    props: {
      showcases: await cms.getShowcases(),
      videos: await cms.getVideos(),
      socialMedia: await cms.getSocialMedia(),
    },
  };
};

const Index = (props: IIndexProps) => {
  const { showcases, videos, socialMedia } = props;
  return (
    <PageLayout>
      <Meta />

      <Showcases showcases={showcases} />

      <VideoCardSection videos={videos} />

      <SocialMedia socialMedia={socialMedia} />
    </PageLayout>
  );
};

export default Index;
