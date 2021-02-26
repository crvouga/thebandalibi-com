import { GetStaticProps } from "next";
import { Gallery, IGalleryProps } from "../../components/templates/gallery";
import { cms } from "../../lib/cms";

export const getStaticProps: GetStaticProps<IGalleryProps> = async () => {
  return {
    props: {
      socialMedia: await cms.getSocialMedia(),
      galleries: await cms.getGalleries(),
    },
  };
};

export default Gallery;
