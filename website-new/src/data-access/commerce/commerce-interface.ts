export const UPPER_BOUND = 10;

export type ICartItemQuantity = number & { type: 'CartItemQuantity' };

export const add = (a: number, b: number): ICartItemQuantity => {
  return CartItemQuantity(a + b);
};

export const CartItemQuantity = (quantity: number) => {
  return Math.max(1, Math.min(UPPER_BOUND, quantity)) as ICartItemQuantity;
};

export const DEFAULT_CURRENCY_CODE = 'USD';

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
  variantName: string;
  productName: string;
  price: IPrice;
  image: IImage;
  selectedOptions: IProductOption[];
};

export type IProduct = {
  productId: string;
  productName: string;
  descriptionHTML: string;
  thumbnail: IImage;
  images: IImage[];
  variants: IProductVariant[];
};

export type ICartItem = {
  productName: string;
  variantName: string;
  cartItemId: string;
  image: IImage;
  variantId: string;
  productId: string;
  quantity: ICartItemQuantity;
  price: IPrice;
};

export type ICartItemUpdate = {
  cartItemId: string;
  quantity: ICartItemQuantity;
};

export type ICartItemAdd = {
  variantId: string;
  quantity: ICartItemQuantity;
};

export type ICart = {
  checkoutUrl: string;
  cartId: string;
  items: ICartItem[];
};

export type IProductGetOne = ({
  productId,
}: {
  productId: string;
}) => Promise<IProduct>;

export type IProductGetAll = ({
  pageSize,
}: {
  pageSize: number;
}) => Promise<IProduct[]>;

export type IProductGetRelated = ({
  productId,
}: {
  productId: string;
}) => Promise<IProduct[]>;

export type ICartGet = (cartId: string) => Promise<ICart>;

export type ICartCreate = () => Promise<ICart>;

export type ICartRemove = (
  cartId: string,
  cartItemIds: string[],
) => Promise<ICart>;

export type ICartUpdate = (
  cartId: string,
  updates: ICartItemUpdate[],
) => Promise<ICart>;

export type ICartAdd = (
  cartId: string,
  additions: ICartItemAdd[],
) => Promise<ICart>;

export type ILegalHTML = {
  termsOfServiceHTML: string;
  refundPolicyHTML: string;
  privacyPolicyHTML: string;
  shippingPolicyHTML: string;
};

export type ILegalGetHTML = () => Promise<ILegalHTML>;

export type ICommerce = {
  Legal: {
    getHTML: ILegalGetHTML;
  };
  Products: {
    getAll: IProductGetAll;
    getOne: IProductGetOne;
    getRelated: IProductGetRelated;
  };
  Cart: {
    get: ICartGet;
    create: ICartCreate;
    add: ICartAdd;
    update: ICartUpdate;
    remove: ICartRemove;
  };
};
