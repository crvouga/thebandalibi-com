import { GetStaticPaths, GetStaticProps } from "next";
import {
  ShopProductSingle,
  IShopProductSingle,
} from "../../../components/shop/shop.product.single";
import { dataStore } from "../../../lib/data-access";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await dataStore.product.getAll();

  const paths = products.map((product) => ({
    params: {
      id: String(product.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IShopProductSingle> = async (
  context
) => {
  const id = context.params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      settings: await dataStore.settings.get(),
      productInfo: await dataStore.product.getInfo(id),
    },
  };
};

export default ShopProductSingle;
