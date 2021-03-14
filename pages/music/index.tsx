import { GetStaticProps } from "next";
import { IReleaseProps, Release } from "../../components/pages/release";
import { dataStore } from "../../lib/data-access";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      releases: await dataStore.release.getAll(),
    },
  };
};

export default Release;
