import { content } from "@data-access";
import { GetStaticProps } from "next";
import { IMediaProps, Media } from "../../components/content/pages/media";

export const getStaticProps: GetStaticProps<IMediaProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      imageGalleries: await content.imageGallery.getAll(),
      videoGalleries: await content.videoGallery.getAll(),
      releases: await content.release.getAll(),
    },
  };
};

export default Media;
