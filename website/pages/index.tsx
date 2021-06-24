import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/landing/landing";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      releases: await content.release.getAll(),
    },
  };
};

export default Landing;
