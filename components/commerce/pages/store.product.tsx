import { Shop } from "./store";

export type IProductProps = Parameters<typeof Shop>[0];

export const Product = Shop;
