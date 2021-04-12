import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
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
    width: "auto",
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

export const ShopProductInfoVariantHorizontalListItem = ({
  title,
  subtitle,
  image,
  onClick,
  selected,
}: {
  title: string;
  subtitle: string;
  image: string;
  onClick: () => void;
  selected: boolean;
}) => {
  const classes = useStyles();
  return (
    <ListItem
      button
      selected={selected}
      className={classes.listItem}
      onClick={onClick}
    >
      <Avatar className={classes.listItemAvatar} src={image} />

      <Typography className={classes.listItemTitle}>{title}</Typography>

      <Typography color="textSecondary" className={classes.listItemSubtitle}>
        {subtitle}
      </Typography>
    </ListItem>
  );
};

export const ShopProductInfoVariantHorizontalList = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const classes = useStyles();
  return <List className={classes.list}>{children} </List>;
};
