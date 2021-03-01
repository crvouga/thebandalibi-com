import { Icon } from "@material-ui/core";
import Avatar, { AvatarProps } from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import { IPlatform } from "../../lib/domain";
import { minimumBy } from "../../lib/utility";
import { editDistance } from "../../lib/utility/edit-distance";

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: "transparent",
  },
  icon: {
    color: theme.palette.text.primary,
    fontSize: "36px",
  },
}));

const BRAND_ICON_CLASSNAME: { [key: string]: string } = {
  youtube: "fa fa-youtube-play",
  instagram: "fa fa-instagram",
  spotify: "fa fa-spotify",
  apple: "fa fa-apple",
};

export const PlatformAvatar = (
  props: AvatarProps & { platform: IPlatform }
) => {
  const { platform, ...AvatarProps } = props;

  const classes = useStyles();

  const iconClassNameKey = minimumBy(
    (key) => editDistance(key, platform.name),
    Object.keys(BRAND_ICON_CLASSNAME)
  );

  const iconClassName =
    iconClassNameKey in BRAND_ICON_CLASSNAME
      ? BRAND_ICON_CLASSNAME[iconClassNameKey]
      : "not-found";

  return (
    <Avatar className={classes.avatar} variant="rounded" {...AvatarProps}>
      <Icon className={clsx(iconClassName, classes.icon)} />
    </Avatar>
  );
};
