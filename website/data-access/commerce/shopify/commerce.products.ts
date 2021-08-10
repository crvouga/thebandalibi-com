import {
  DEFAULT_CURRENCY_CODE,
  ICommerce,
  IPrice,
  IProduct,
  IProductOption,
  IProductVariant,
} from "../interface";

/* 

NOTE: shopify buy type definitions does not map directly to shopify buy return data

*/

const toOption = (shopifyOption: unknown): IProductOption => {
  //@ts-ignore
  const name = shopifyOption.name;
  //@ts-ignore
  const value = shopifyOption.value;

  if (typeof name === "string" && typeof value === "string") {
    return {
      name,
      value,
    };
  }

  throw new Error("failed to parse shopify option data");
};

const toSelectedOptions = (
  variant: ShopifyBuy.ProductVariant
): IProductOption[] => {
  //@ts-ignore
  const shopifySelectedOptions = variant.selectedOptions;

  if (!shopifySelectedOptions) {
    throw new Error("failed to parse shopify selected options data");
  }

  if (!Array.isArray(shopifySelectedOptions)) {
    throw new Error("failed to parse shopify selected options data");
  }

  return shopifySelectedOptions.map(toOption);
};

const toDescriptionHTML = (shopifyProduct: ShopifyBuy.Product): string => {
  //@ts-ignore
  const descriptionHTML = shopifyProduct.descriptionHtml;

  if (typeof descriptionHTML === "string") {
    return descriptionHTML;
  }

  throw new Error("failed to parse shopify product descriptionHTML");
};

const toPrice = (variant: ShopifyBuy.ProductVariant): IPrice => {
  //@ts-ignore
  const priceV2 = variant.priceV2;

  if (
    priceV2 &&
    typeof priceV2.amount === "string" &&
    typeof priceV2.currencyCode === "string"
  ) {
    return {
      amount: Number(priceV2.amount),
      currencyCode: String(priceV2.currencyCode),
    };
  }

  console.warn(
    `Commerce module is assuming the currency code is ${DEFAULT_CURRENCY_CODE}`
  );

  return {
    amount: Number(variant.price),
    currencyCode: DEFAULT_CURRENCY_CODE,
  };
};

const toVariant = ({
  productName,
  variant,
}: {
  productName: string;
  variant: ShopifyBuy.ProductVariant;
}): IProductVariant => {
  return {
    productId: String(variant.productId),
    variantId: String(variant.id),
    image: {
      src: variant.image.src,
      alt: variant.title,
    },
    variantName: String(variant.title),
    productName,
    price: toPrice(variant),
    selectedOptions: toSelectedOptions(variant),
  };
};

const toImage = (image: ShopifyBuy.Image, product: ShopifyBuy.Product) => {
  //@ts-ignore
  const altText = product.altText;

  const alt = altText ?? product.title;

  return {
    src: image.src,
    alt,
  };
};

const toProduct = (product: ShopifyBuy.Product): IProduct => {
  const productName = product.title;

  return {
    productId: String(product.id),
    productName,
    thumbnail: toImage(product.images[0], product),
    descriptionHTML: toDescriptionHTML(product),
    images: product.images.map((image) => {
      return toImage(image, product);
    }),

    variants: product.variants.map((variant) => {
      return toVariant({
        variant,
        productName,
      });
    }),
  };
};

export const CommerceProducts = ({
  shopifyClient,
  pageSize,
}: {
  shopifyClient: ShopifyBuy.Client;
  pageSize: number;
}): ICommerce["products"] => {
  return {
    async getOne({ productId }: { productId: string }) {
      const result = await shopifyClient.product.fetch(productId);

      const product = toProduct(result);

      return product;
    },

    async getAll() {
      const results = await shopifyClient.product.fetchAll(pageSize);

      const products = results.map(toProduct);

      return products;
    },

    async getRelated({ productId }: { productId: string }) {
      const results = await shopifyClient.product.fetchAll(pageSize);

      const products = results.map(toProduct);

      const related = products.filter(
        (product) => product.productId !== productId
      );

      return related;
    },
  };
};
