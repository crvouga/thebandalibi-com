import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { IVariant } from "../../lib/data-access/product";
import { Avatar } from "../shared/avatar";

const formatPrice = ({
  currency,
  price,
}: {
  price: string | number;
  currency: string;
}) => {
  return `${price} ${currency}`;
};

export const ShopProductInfoVariantVerticalList = ({
  variants,
  selectedVariantId,
  onClick,
}: {
  selectedVariantId?: number;
  onClick?: (variant: IVariant) => void;
  variants: IVariant[];
}) => {
  return (
    <List>
      {variants.map((variant) => (
        <ListItem
          //@ts-ignore
          button={Boolean(onClick)}
          selected={selectedVariantId === variant.id}
          key={variant.id}
          onClick={() => {
            onClick?.(variant);
          }}
        >
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

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    scrollSnapType: `x mandatory`,
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    scrollSnapAlign: "start",
  },
  listItemAvatar: {
    width: "100px",
    height: "100px",
  },
}));

const MAX_LENGTH = 50;
const TRAIL = "...";
const formatName = (name: string) => {
  if (name.length >= MAX_LENGTH) {
    return `${name.substring(0, MAX_LENGTH - TRAIL.length)}${TRAIL}`;
  }
  return name;
};

export const ShopProductInfoVariantHorizontalList = ({
  variants,
  onClick,
  selectedVariantId,
}: {
  selectedVariantId?: number;

  onClick?: (variant: IVariant) => void;
  variants: IVariant[];
}) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {variants.map((variant) => (
        <ListItem
          //@ts-ignore
          button={Boolean(onClick)}
          selected={selectedVariantId === variant.id}
          key={variant.id}
          className={classes.listItem}
          onClick={() => {
            onClick?.(variant);
          }}
        >
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              className={classes.listItemAvatar}
              src={variant.product.image}
            />
          </ListItemAvatar>
          <ListItemText
            primary={formatName(variant.name)}
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
