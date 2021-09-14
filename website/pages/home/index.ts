import { HomePage, IHomePageProps } from "@components/landing/home-page";
import { content } from "@data-access";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  return {
    props: {
      landingPage: await content.landingPage.get(),
      settings: await content.settings.get(),
    },
  };
};

export default HomePage;
