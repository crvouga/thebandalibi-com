import { GetStaticProps } from "next";
import { IShopProps, Shop } from "../../components/shop/store";
import { dataStore } from "../../lib/data-access";

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
      products: await dataStore.product.getAll(),
    },
  };
};

export default Shop;
