import { commerce, content } from "@data-access";
import { GetStaticProps } from "next";
import { ILandingProps, Landing } from "../components/landing/landing";

export const getStaticProps: GetStaticProps<ILandingProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      products: await commerce.products.getAll(),
    },
  };
};

export default Landing;
