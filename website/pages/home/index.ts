import {
  getGridLandingPageProps,
  GridLandingPage,
  IGridLandingPageProps,
} from "@components/landing/grid-landing-page";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<IGridLandingPageProps> = async () => {
  return {
    props: await getGridLandingPageProps(),
  };
};

export default GridLandingPage;
