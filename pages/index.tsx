import { GetStaticProps } from "next";
import { GalleryGrid } from "../components/gallery/gallery-grid";
import { Meta } from "../components/meta";
import { SectionHeader, SectionLayout } from "../components/section";
import { ShowcaseSection } from "../components/showcase";
import { SocialMediaCardGrid } from "../components/social-media/social-media-card-grid";
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
    <div>
      <Meta />

      <ShowcaseSection showcases={showcases} />

      <SectionLayout layoutId="social-media">
        <SectionHeader title="Find Us Here" />
        <SocialMediaCardGrid socialMedia={socialMedia} />
      </SectionLayout>

      <SectionLayout layoutId="video">
        <SectionHeader
          title="Video"
          action={{ name: "See All", href: "/video" }}
        />

        <VideoCardGrid videos={videos.slice(0, 3)} />
      </SectionLayout>

      <SectionLayout layoutId="gallery">
        <SectionHeader
          title="Gallery"
          action={{ name: "See All", href: "/gallery" }}
        />

        <GalleryGrid galleries={galleries.slice(0, 3)} />
      </SectionLayout>
    </div>
  );
};

export default Index;
