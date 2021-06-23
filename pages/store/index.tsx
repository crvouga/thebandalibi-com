import { GetStaticProps } from "next";
import { IShopProps, Shop } from "../../components/commerce/pages/store";
import { content } from "@data-access";

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      products: await content.product.getAll(),
    },
  };
};

export default Shop;
