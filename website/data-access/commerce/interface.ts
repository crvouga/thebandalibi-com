export type IProductVariant = {
  productVariantId: string;
  name: string;
  price: string;
  image: {
    src: string;
  };
};

export type IProduct = {
  productId: string;
  name: string;
  descriptionHTML: string;
  thumbnail: {
    src: string;
  };
  images: {
    src: string;
  }[];
  variants: IProductVariant[];

  options: {
    name: string;
    values: string[];
  }[];
};

export type ICommerce = {
  products: {
    getOne: ({ productId }: { productId: string }) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
  };
};
