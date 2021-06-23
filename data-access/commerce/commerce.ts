import { ICommerce, IProduct } from "./interface";
import { IShopifyClient } from "../frameworks";

export const Commerce = ({
  shopifyClient,
  pageSize,
}: {
  shopifyClient: IShopifyClient;
  pageSize: number;
}): ICommerce => {
  return {
    products: {
      async getAll() {
        const results = await shopifyClient.product.fetchAll(pageSize);

        const products: IProduct[] = results.map((result) => ({
          productId: String(result.id),
          name: result.title,
          thumbnail: {
            src: result.images[0].src,
          },
          variants: result.variants.map((variant) => ({
            productVariantId: String(variant.id),
            name: variant.title,
            price: variant.price,
          })),
        }));

        return products;
      },
    },
  };
};
