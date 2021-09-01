import { commerce, content } from "@data-access";
import { events } from "data-access/events/bands-in-town";
import { GetStaticProps } from "next";
import { ILinkPageProps, LinkPage } from "@components/landing/link-page";

export const getStaticProps: GetStaticProps<ILinkPageProps> = async () => {
  return {
    props: {
      landingPage: await content.landingPage.get(),
      settings: await content.settings.get(),
      products: await commerce.products.getAll(),
      releases: await content.release.getAll(),
      imageGalleries: await content.imageGallery.getAll(),
      videoGalleries: await content.videoGallery.getAll(),
      events: await events.getAll({
        date: "upcoming",
      }),
    },
  };
};

export default LinkPage;
