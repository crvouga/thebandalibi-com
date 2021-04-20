import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/landing/landing";
import { dataStore } from "../lib/data-access";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      releases: await dataStore.release.getAll(),
    },
  };
};

export default Landing;
