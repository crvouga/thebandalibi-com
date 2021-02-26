import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/templates/landing";
import { cms } from "../lib/cms";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  const landingPageData = await cms.getLandingPage();

  if (landingPageData) {
    return {
      props: {
        heros: landingPageData.heros,
        videos: landingPageData.videos,
        platforms: await cms.getPlatforms(),
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

export default Landing;
