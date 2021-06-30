import { equalBy, groupBy, uniqueBy } from "@utility";

type IImage = {
  src: string;
};

export type IPrice = {
  amount: string;
  currencyCode: string;
};

export type IProductOption = {
  name: string;
  value: string;
};

export const optionToString = (option: IProductOption) => {
  return [option.name, option.value].join(",");
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

export type ICommerce = {
  products: {
    getOne: ({ productId }: { productId: string }) => Promise<IProduct>;
    getAll: () => Promise<IProduct[]>;
  };
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
