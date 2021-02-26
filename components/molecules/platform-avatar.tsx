import Avatar, { AvatarProps } from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import { IPlatform } from "../../lib/contracts";
import { SEO_KEYWORD } from "./meta";

const useStyles = makeStyles(() => ({
  avatar: {
    background: "transparent",
  },
}));

export const PlatformAvatar = (
  props: AvatarProps & { platform: IPlatform }
) => {
  const { platform, ...AvatarProps } = props;

  const classes = useStyles();

  return (
    <Avatar className={classes.avatar} variant="rounded" {...AvatarProps}>
      <Image
        alt={`${platform.name} ${SEO_KEYWORD}`}
        layout="fill"
        src={platform.icon.url}
      />
    </Avatar>
  );
};
