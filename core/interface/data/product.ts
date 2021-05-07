export type IProduct = {
  id: string;
  name: string;
  thumbnailUrl: string;
  variantCount: number;
};

type IProductVariant = {
  image: string;
  name: string;
};

export type IVariant = {
  productId: string;
  id: string;
  name: string;
  retailPrice: number;
  currency: string;
  product: IProductVariant;
  sku: string;
};

export type IProductInfo = {
  product: IProduct;
  variants: IVariant[];
};
