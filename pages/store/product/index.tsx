import { GetStaticProps } from "next";
import {
  IProductProps,
  Product,
} from "../../../components/commerce/pages/store.product";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IProductProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
      products: await contentDataStore.product.getAll(),
    },
  };
};

export default Product;
