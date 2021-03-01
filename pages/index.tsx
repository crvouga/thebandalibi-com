import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/pages/landing";
import { store } from "../lib/store";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await store.settings.get(),
      platforms: await store.platform.getAll(),
      imageGalleries: await store.imageGallery.getAll(),
      releases: await store.release.getAll(),
    },
  };
};

export default Landing;
