import { GetStaticProps } from "next";
import { IShopProps, Shop } from "../../components/commerce/pages/store";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
      products: await contentDataStore.product.getAll(),
    },
  };
};

export default Shop;
