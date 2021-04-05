import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/pages/landing";
import { dataStore } from "../lib/data-access";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      platforms: await dataStore.platform.getAll(),
      imageGalleries: await dataStore.imageGallery.getAll(),
      releases: await dataStore.release.getAll(),
      products: await dataStore.product.getAll(),
    },
  };
};

export default Landing;
