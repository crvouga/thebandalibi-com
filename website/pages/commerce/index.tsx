import { GetStaticProps } from "next";
import {
  CommercePage,
  ICommerceProps,
} from "../../components/commerce/pages/commerce";
import { commerce, content } from "@data-access";

export const getStaticProps: GetStaticProps<ICommerceProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      products: await commerce.products.getAll(),
    },
  };
};

export default CommercePage;
