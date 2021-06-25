import { IShopifyClient, IShopifyProduct } from "../third-party-services";
import { ICommerce, IProduct } from "./interface";

const shopifyProductToProduct = (
  shopifyProduct: IShopifyProduct
): IProduct => ({
  productId: String(shopifyProduct.id),
  name: shopifyProduct.title,
  thumbnail: {
    src: shopifyProduct.images[0].src,
  },
  //@ts-ignore
  descriptionHTML: shopifyProduct.descriptionHtml,
  variants: shopifyProduct.variants.map((variant) => ({
    productVariantId: String(variant.id),
    name: variant.title,
    price: variant.price,
  })),
});

export const Commerce = ({
  shopifyClient,
  pageSize,
}: {
  shopifyClient: IShopifyClient;
  pageSize: number;
}): ICommerce => {
  return {
    products: {
      async getOne({ productId }: { productId: string }) {
        const result = await shopifyClient.product.fetch(productId);

        const product = shopifyProductToProduct(result);

        return product;
      },

      async getAll() {
        const results = await shopifyClient.product.fetchAll(pageSize);

        const products = results.map(shopifyProductToProduct);

        return products;
      },
    },
  };
};
