import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/pages/landing";
import { dataStore } from "../lib/data-store";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      platforms: await dataStore.platform.getAll(),
      imageGalleries: await dataStore.imageGallery.getAll(),
      releases: await dataStore.release.getAll(),
    },
  };
};

export default Landing;
