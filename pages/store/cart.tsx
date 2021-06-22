import { GetStaticProps } from "next";
import {
  IShopCartProps,
  ShopCart,
} from "../../components/commerce/pages/store.cart";
import { contentDataStore } from "@data-access";

export const getStaticProps: GetStaticProps<IShopCartProps> = async () => {
  return {
    props: {
      settings: await contentDataStore.settings.get(),
    },
  };
};

export default ShopCart;
