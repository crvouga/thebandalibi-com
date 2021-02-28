import { GetStaticProps } from "next";
import { IReleaseProps, Release } from "../../components/templates/release";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      settings: await store.settings.get(),
      releases: await store.release.getAll(),
    },
  };
};

export default Release;
