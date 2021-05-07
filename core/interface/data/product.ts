export type IProduct = {
  id: string;
  name: string;
  thumbnailUrl: string;
  variantCount: number;
};

export type IProductVariant = {
  productId: string;
  id: string;
  name: string;
  retailPrice: number;
  currency: string;
  product: {
    image: string;
    name: string;
  };
  sku: string;
};

export type IProductInfo = {
  product: IProduct;
  variants: IProductVariant[];
};
