import { GetStaticProps } from "next";
import {
  IShopCartProps,
  ShopCart,
} from "../../components/commerce/pages/store.cart";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IShopCartProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
    },
  };
};

export default ShopCart;
