import { equalBy, groupBy, sum, uniqueBy } from "@utility";
import {
  DEFAULT_CURRENCY_CODE,
  ICart,
  IPrice,
  IProduct,
  IProductOption,
  IProductVariant,
} from "./interface";

export const optionToString = (option: IProductOption) => {
  return [option.name, option.value].join(",");
};

export const productToOptionsByName = (
  product: IProduct
): { [name: string]: IProductOption[] } => {
  const allOptions = product.variants.flatMap(
    (variant) => variant.selectedOptions
  );

  const uniqueOptions = uniqueBy(
    (option) => `${option.name}${option.value}`,
    allOptions
  );

  const optionsByName = groupBy((option) => option.name, uniqueOptions);

  return optionsByName;
};

export const selectedOptionsToVariant = (
  product: IProduct,
  someOptions: IProductOption[]
): IProductVariant | null => {
  const variants = product.variants.filter((variant) =>
    variant.selectedOptions.every((selectedOption) =>
      someOptions.some((option) =>
        equalBy(optionToString, selectedOption, option)
      )
    )
  );

  return variants[0] ?? null;
};

const cartToCurrenyCode = (cart: ICart) => {
  const currenyCodes = uniqueBy(
    (x) => x,
    cart.lineItems.map((lineItem) => lineItem.price.currencyCode)
  );

  if (currenyCodes.length === 0) {
    return "";
  }

  return currenyCodes[0];
};

export const cartToSubtotal = (cart: ICart) => {
  return {
    currencyCode: cartToCurrenyCode(cart),
    amount: sum(
      cart.lineItems.map(
        (lineItem) => lineItem.price.amount * lineItem.quantity
      )
    ),
  };
};

export const priceToString = (price: IPrice) =>
  `${price.amount} ${price.currencyCode}`;
