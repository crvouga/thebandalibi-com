import { GetStaticProps } from "next";
import { IShopProps, Shop } from "../../components/commerce/pages/store";
import { commerce, content } from "@data-access";

export const getStaticProps: GetStaticProps<IShopProps> = async () => {
  return {
    props: {
      settings: await content.settings.get(),
      products: await commerce.products.getAll(),
    },
    revalidate: 60,
  };
};

export default Shop;
