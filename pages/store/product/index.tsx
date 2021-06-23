import { GetStaticProps } from "next";
import {
  IProductProps,
  Product,
} from "../../../components/commerce/pages/store.product";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IProductProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      products: await content.product.getAll(),
    },
  };
};

export default Product;
