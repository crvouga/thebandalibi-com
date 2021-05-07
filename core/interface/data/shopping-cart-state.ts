import { IProductVariant } from "./product";

export type IUserAddedShoppingCartItemEvent = {
  type: "USER_ADDED_SHOPPING_CART_ITEM";
  payload: {
    variant: IProductVariant;
  };
};

export type IUserRemovedItem = {
  type: "USER_REMOVED_ITEM";
  payload: {
    variant: IProductVariant;
  };
};
