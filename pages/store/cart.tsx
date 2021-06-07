import { GetStaticProps } from "next";
import { IShopCartProps, ShopCart } from "../../features/shop/pages/store.cart";
import { dataStore } from "@core";

export const getStaticProps: GetStaticProps<IShopCartProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default ShopCart;
