import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/landing/landing";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
      releases: await contentDataStore.release.getAll(),
    },
  };
};

export default Landing;
