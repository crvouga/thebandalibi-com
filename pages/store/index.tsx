import { GetStaticProps } from "next";
import { IShopProps, Shop } from "../../features/shop/pages/store";
import { dataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      products: await dataStore.product.getAll(),
    },
  };
};

export default Shop;
