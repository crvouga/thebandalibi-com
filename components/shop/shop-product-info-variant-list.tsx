import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { IProductInfo } from "../../lib/data-access/product";

const formatPrice = ({
  currency,
  price,
}: {
  price: string | number;
  currency: string;
}) => {
  return `${price} ${currency}`;
};

export const ShopProductInfoVariantList = ({
  productInfo,
}: {
  productInfo: IProductInfo;
}) => {
  return (
    <List>
      {productInfo.variants.map((variant) => (
        <ListItem button key={variant.id}>
          <ListItemAvatar>
            <Avatar variant="rounded" src={variant.product.image} />
          </ListItemAvatar>
          <ListItemText
            primary={variant.name}
            secondary={formatPrice({
              price: variant.retailPrice,
              currency: variant.currency,
            })}
          />
        </ListItem>
      ))}
    </List>
  );
};
