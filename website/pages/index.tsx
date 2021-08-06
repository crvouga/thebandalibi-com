import { commerce, content } from "@data-access";
import { events } from "data-access/events/bands-in-town";
import { GetStaticProps } from "next";
import {
  ILandingPageProps,
  LandingPage,
} from "../components/landing/landing-page";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  return {
    props: {
      landingPage: await content.landingPage.get(),
      settings: await content.settings.get(),
    },
  };
};

export default LandingPage;
