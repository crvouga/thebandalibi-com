type IImage = {
  src: string;
  alt: string;
};

export type IPrice = {
  amount: string;
  currencyCode: string;
};

export type IProductOption = {
  name: string;
  value: string;
};

export type IProductVariant = {
  variantId: string;
  name: string;
  price: IPrice;
  image: IImage;
  selectedOptions: IProductOption[];
};

export type IProduct = {
  productId: string;
  name: string;
  descriptionHTML: string;
  thumbnail: IImage;
  images: IImage[];
  variants: IProductVariant[];
};

export type ILineItem = {
  title: string;
  lineItemId: string;
  image: IImage;
  variantId: string;
  productId: string;
  quantity: number;
};

export type ICart = {
  cartId: string;
  lineItems: ILineItem[];
};

export type ICommerce = {
  products: {
    getOne: ({ productId }: { productId: string }) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
  };
  checkout: {
    get: (cartId: string) => Promise<ICart>;
    create: () => Promise<ICart>;
  };
};
