import { ICommerce } from '../commerce-interface';
import * as Cart from './shopify-cart';
import * as Legal from './shopify-legal';
import * as Products from './shopify-products';

export const Commerce: ICommerce = {
  Products,
  Cart,
  Legal,
};
