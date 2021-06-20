import { GetStaticProps } from "next";
import {
  IReleaseProps,
  Release,
} from "../../components/content/release/release";
import { dataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      releases: await dataStore.release.getAll(),
    },
  };
};

export default Release;
