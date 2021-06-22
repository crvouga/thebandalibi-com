import { GetStaticProps } from "next";
import {
  IReleaseProps,
  Release,
} from "../../components/content/release/release";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
      releases: await contentDataStore.release.getAll(),
    },
  };
};

export default Release;
