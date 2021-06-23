import { makeStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Avatar } from "generic-components";

const AVATAR_SIZE = "80px";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
  },
  listItemAvatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    marginBottom: theme.spacing(1),
  },
  listItemTitle: {
    width: "100%",
  },
  listItemSubtitle: {
    width: "100%",
  },
}));

export const ProductVariantCard = ({
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
