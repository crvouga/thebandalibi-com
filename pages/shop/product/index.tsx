import { GetStaticProps } from "next";
import {
  IShopProductProps,
  ShopProduct,
} from "../../../components/shop/shop.product";
import { dataStore } from "../../../lib/data-access";

export const getStaticProps: GetStaticProps<IShopProductProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      products: await dataStore.product.getAll(),
    },
  };
};

export default ShopProduct;
