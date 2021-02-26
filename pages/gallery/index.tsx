import { GetStaticProps } from "next";
import { Gallery, IGalleryProps } from "../../components/templates/gallery";
import { cms } from "../../lib/cms";

export const getStaticProps: GetStaticProps<IGalleryProps> = async () => {
  return {
    props: {
      platforms: await cms.getPlatforms(),
      galleries: await cms.getGalleries(),
    },
  };
};

export default Gallery;
