import { commerce, content } from "@data-access";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  IProductSingleProps,
  ProductSingle,
} from "../../../components/commerce/pages/store.product.single";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await commerce.products.getAll();

  const paths = products.map((product) => ({
    params: {
      id: product.productId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProductSingleProps> = async (
  context
) => {
  const productId = context?.params?.id?.toString();

  if (!productId) {
    return {
      notFound: true,
    };
  }

  const product = await commerce.products.getOne({ productId });

  if (!product) {
    return {
      notFound: true,
    };
  }

  const relatedProducts = await commerce.products.getRelated({ productId });

  const settings = await content.settings.get();

  return {
    props: {
      settings: await content.settings.get(),
      product,
      relatedProducts,
    },
    revalidate: 60,
  };
};

export default ProductSingle;
