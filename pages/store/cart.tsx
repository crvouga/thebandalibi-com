import { GetStaticProps } from "next";
import {
  IShopCartProps,
  ShopCart,
} from "../../components/commerce/pages/store.cart";
import { dataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IShopCartProps> = async () => {
  return {
    props: {
      settings: await dataStore.settings.get(),
    },
  };
};

export default ShopCart;
