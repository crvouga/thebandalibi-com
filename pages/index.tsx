import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/templates/landing";
import { store } from "../lib/store";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  const landingPageData = await store.landingPage.getOne();

  if (landingPageData) {
    return {
      props: {
        heros: landingPageData.heros,
        videos: landingPageData.videos,
        platforms: await store.platform.getAll(),
        imageGalleries: await store.imageGallery.getAll(),
        releases: await store.release.getAll(),
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Landing;
