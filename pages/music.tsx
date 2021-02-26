import { GetStaticProps } from "next";
import { IReleaseProps, Release } from "../components/templates/release";
import { cms } from "../lib/cms";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      socialMedia: await cms.getSocialMedia(),
      releases: await cms.getReleases(),
    },
  };
};

export default Release;
