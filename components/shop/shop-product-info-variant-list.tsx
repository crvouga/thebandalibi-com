import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { IVariant } from "../../lib/data-access/product";
import { Avatar } from "../shared/avatar";
import Typography from "@material-ui/core/Typography";

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
  selectedVariantId?: string;
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

const useStyles = makeStyles((theme) => ({
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
    width: "120px",
    height: "120px",
    marginBottom: theme.spacing(1),
  },
  listItemTitle: {
    width: "100%",
  },
  listItemSubtitle: {
    width: "100%",
  },
}));

export const ShopProductInfoVariantHorizontalList = ({
  variants,
  onClick,
  selectedVariantId,
  formatName = ({ name }: { name: string }) => name,
}: {
  selectedVariantId?: string;
  formatName?: ({ name }: { name: string }) => string;
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
          <Avatar
            // variant="rounded"
            className={classes.listItemAvatar}
            src={variant.product.image}
          />

          <Typography className={classes.listItemTitle}>
            {formatName({
              name: variant.name,
            })}
          </Typography>

          <Typography
            color="textSecondary"
            className={classes.listItemSubtitle}
          >
            {formatPrice({
              price: variant.retailPrice,
              currency: variant.currency,
            })}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};
