import { GetStaticProps } from "next";
import { GallerySection } from "../components/gallery/gallery-section";
import { PageLayout } from "../components/layout";
import {
  SectionHeader,
  SectionLayout,
} from "../components/layout/section-layout";
import { Meta } from "../components/meta";
import { ShowcaseSection } from "../components/showcase";
import { SocialMediaSection } from "../components/social-media/social-media-section";
import { VideoCardGrid } from "../components/videos/video-card-grid";
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
  const { showcases, videos, socialMedia, galleries } = props;
  return (
    <PageLayout>
      <Meta />
      <ShowcaseSection showcases={showcases} />
      <SocialMediaSection socialMedia={socialMedia} />

      <SectionLayout layoutId="video">
        <SectionHeader
          title="Video"
          action={{ name: "See All", href: "/video" }}
        />

        <VideoCardGrid videos={videos.slice(0, 3)} />
      </SectionLayout>

      <GallerySection galleries={galleries} />
    </PageLayout>
  );
};

export default Index;
