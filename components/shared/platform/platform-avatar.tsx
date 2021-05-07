import { IPlatform } from "@core";
import Avatar, { AvatarProps } from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { PlatformIcon } from "./platform-icon";

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: "transparent",
  },
  icon: {
    color: theme.palette.text.primary,
    fontSize: "36px",
  },
}));

export const PlatformAvatar = (
  props: AvatarProps & { platform: IPlatform }
) => {
  const { platform, ...AvatarProps } = props;

  const classes = useStyles();

  return (
    <Avatar className={classes.avatar} variant="rounded" {...AvatarProps}>
      <PlatformIcon className={classes.icon} platformName={platform.name} />
    </Avatar>
  );
};
