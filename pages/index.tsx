import { Container } from "@material-ui/core";
import { GetStaticProps } from "next";
import { GalleryGrid } from "../components/gallery/gallery-grid";
import {
  SectionHeader,
  SectionLayout,
} from "../components/layout/section-layout";
import { Meta } from "../components/meta";
import { Reveal } from "../components/reveal-animation";
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
    <div>
      <Meta />

      <Container maxWidth="lg">
        <ShowcaseSection showcases={showcases} />

        <SocialMediaSection socialMedia={socialMedia} />

        <SectionLayout layoutId="video">
          <Reveal>
            <SectionHeader
              title="Video"
              action={{ name: "See All", href: "/video" }}
            />
          </Reveal>

          <VideoCardGrid videos={videos.slice(0, 3)} />
        </SectionLayout>

        <SectionLayout layoutId="gallery">
          <Reveal>
            <SectionHeader
              title="Gallery"
              action={{ name: "See All", href: "/gallery" }}
            />
          </Reveal>
          <GalleryGrid galleries={galleries.slice(0, 3)} />
        </SectionLayout>
      </Container>
    </div>
  );
};

export default Index;
