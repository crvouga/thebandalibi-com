export type IProductVariant = {
  productVariantId: string;
  name: string;
  price: string;
};

export type IProduct = {
  productId: string;
  name: string;
  thumbnail: {
    src: string;
  };
  variants: IProductVariant[];
};

export type ICommerce = {
  products: {
    getAll: () => Promise<IProduct[]>;
  };
};
