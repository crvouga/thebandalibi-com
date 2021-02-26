import { GetStaticProps } from "next";
import { IReleaseProps, Release } from "../../components/templates/release";
import { store } from "../../lib/store";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      platforms: await store.platform.getAll(),
      releases: await store.release.getAll(),
    },
  };
};

export default Release;
