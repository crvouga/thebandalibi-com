export type IProductVariant = {
  productVariantId: string;
  name: string;
  price: string;
  image: {
    src: string;
  };
  optionValues: {
    optionValueId: string;
    name: string;
    value: string;
  }[];
};

export type IProduct = {
  productId: string;
  name: string;
  descriptionHTML: string;
  thumbnail: {
    src: string;
  };
  variants: IProductVariant[];
};

export type ICommerce = {
  products: {
    getOne: ({ productId }: { productId: string }) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
  };
};
