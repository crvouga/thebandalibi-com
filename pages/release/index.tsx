import { GetStaticProps } from "next";
import {
  IReleaseProps,
  Release,
} from "../../components/content/release/release";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IReleaseProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      releases: await content.release.getAll(),
    },
  };
};

export default Release;
