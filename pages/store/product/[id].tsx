import { GetStaticPaths, GetStaticProps } from "next";
import {
  ProductSingle,
  IProductSingle,
} from "../../../components/commerce/pages/store.product.single";
import { contentDataStore } from "@data-access";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await contentDataStore.product.getAll();

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

export const getStaticProps: GetStaticProps<IProductSingle> = async (
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
      settings: await contentDataStore.settings.get(),
      productInfo: await contentDataStore.product.getInfo(id),
    },
  };
};

export default ProductSingle;
