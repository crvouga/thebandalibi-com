type IImage = {
  src: string;
  alt: string;
};

export type IPrice = {
  amount: number;
  currencyCode: string;
};

export type IProductOption = {
  name: string;
  value: string;
};

export type IProductVariant = {
  productId: string;
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
  name: string;
  lineItemId: string;
  image: IImage;
  variantId: string;
  productId: string;
  quantity: number;
  price: IPrice;
};

export type ICart = {
  cartId: string;
  lineItems: ILineItem[];
};

export type ICommerce = {
  products: {
    getOne({ productId }: { productId: string }): Promise<IProduct>;
    getAll(): Promise<IProduct[]>;
  };

  cart: {
    get(cartId: string): Promise<ICart>;
    create(): Promise<ICart>;
    remove(cartId: string, lineItemIds: string[]): Promise<ICart>;
    add(
      cartId: string,
      lineItems: { variantId: string; quantity: number }[]
    ): Promise<ICart>;
  };
};
