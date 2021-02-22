import { GetStaticProps } from "next";
import React from "react";
import {
  ILandingPageProps,
  LandingPage,
} from "../components/templates/landing-page";
import { cms } from "../lib/cms";

export const getStaticProps: GetStaticProps<ILandingPageProps> = async () => {
  const landingPageData = await cms.getLandingPage();

  if (landingPageData) {
    return {
      props: {
        heros: landingPageData.heros,
        videos: landingPageData.videos,
        socialMedia: await cms.getSocialMedia(),
        galleries: await cms.getGalleries(),
        releases: await cms.getReleases(),
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const Index = (props: ILandingPageProps) => {
  return <LandingPage {...props} />;
};

export default Index;
