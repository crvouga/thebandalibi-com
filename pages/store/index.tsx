import { GetStaticProps } from "next";
import { IShopProps, Shop } from "../../components/shop/store";
import { dataStore } from "@core";

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      products: await dataStore.product.getAll(),
    },
  };
};

export default Shop;
