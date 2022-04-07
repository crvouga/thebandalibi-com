import * as R from 'remeda';
import {
  add,
  ICart,
  ICartItem,
  ICartItemUpdate,
  IPrice,
  IProduct,
  IProductOption,
  IProductVariant,
} from './commerce-interface';

export const optionToString = (option: IProductOption) => {
  return [option.name, option.value].join(',');
};

export const productToOptionsByName = (
  product: IProduct,
): { [name: string]: IProductOption[] } => {
  const allOptions = product.variants.flatMap(
    (variant) => variant.selectedOptions,
  );

  const uniqueOptions = R.uniqBy(
    allOptions,
    (option) => `${option.name}${option.value}`,
  );

  const optionsByName = R.groupBy(uniqueOptions, (option) => option.name);

  return optionsByName;
};

export const selectedOptionsToVariant = (
  product: IProduct,
  selectedOptions: IProductOption[],
): IProductVariant | null => {
  const variants = product.variants.filter((variant) =>
    variant.selectedOptions.every((selectedOption) =>
      selectedOptions.some((option) =>
        R.equals(optionToString(selectedOption), optionToString(option)),
      ),
    ),
  );

  return variants[0] ?? null;
};

const cartToCurrenyCode = (cart: ICart) => {
  const currenyCodes = R.uniq(
    cart.items.map((cartItem) => cartItem.price.currencyCode),
  );

  if (currenyCodes.length === 0) {
    return '';
  }

  return currenyCodes[0];
};

export const cartToSubtotal = (cart: ICart) => {
  return {
    currencyCode: cartToCurrenyCode(cart),
    amount: cart.items
      .map((cartItem) => cartItem.price.amount * cartItem.quantity)
      .reduce((a, b) => a + b),
  };
};

export const currencyCodeToSymbol: { [code: string]: string } = {
  USD: '$',
};

export const formatPrice = (price: IPrice) => {
  const currencySymbol = currencyCodeToSymbol[price.currencyCode];
  const amount = formatPriceAmount(price.amount);

  if (currencySymbol) {
    return `${currencySymbol}${amount}`;
  }

  return `${amount} ${price.currencyCode}`;
};

export const updateCartItems = (
  cart: ICart,
  updates: ICartItemUpdate[],
): ICart => {
  const cartItems = cart.items.map((cartItem) =>
    updates
      .filter((update) => update.cartItemId === cartItem.cartItemId)
      .reduce<ICartItem>(
        (cartItem, update) => ({ ...cartItem, ...update }),
        cartItem,
      ),
  );

  return {
    ...cart,
    items: cartItems,
  };
};

export const removeCartItems = (cart: ICart, cartItemIds: string[]): ICart => {
  const cartItems = cart.items.filter(
    (item) => !cartItemIds.includes(item.cartItemId),
  );

  return {
    ...cart,
    items: cartItems,
  };
};

export const cartToTotalQuantity = (cart: ICart) => {
  return cart.items.map((cartItem) => cartItem.quantity).reduce(add);
};

export const productToPriceRange = (product: IProduct) => {
  const allPrices = product.variants.map((variant) => variant.price);
  const lower = R.minBy(allPrices, (price) => price.amount);
  const upper = R.maxBy(allPrices, (price) => price.amount);

  return {
    lower,
    upper,
  };
};

export const productToAveragePrice = (product: IProduct) => {
  const currencyCode = product.variants[0].price.currencyCode;

  const average =
    product.variants
      .map((variant) => variant.price.amount)
      .reduce((a, b) => a + b) / product.variants.length;

  return {
    currencyCode,
    amount: average,
  };
};

export const formatPriceAmount = (amount: number) => {
  return Number(amount).toFixed(2);
};

export const priceRangeToString = ({
  lower,
  upper,
}: ReturnType<typeof productToPriceRange>) => {
  if (lower.amount === upper.amount) {
    return `${formatPrice(lower)}`;
  }

  return `${formatPrice(lower)} - ${formatPrice(upper)}`;
};

export const cartItemToTotalPrice = (cartItem: {
  price: IPrice;
  quantity: number;
}): IPrice => {
  return {
    ...cartItem.price,
    amount: cartItem.quantity * cartItem.price.amount,
  };
};
