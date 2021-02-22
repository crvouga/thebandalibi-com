import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import { ISocialMedia } from "../../lib/contracts";
import { SEO_KEYWORD } from "./meta";

type ISocialMediaCardProps = {
  socialMedia: ISocialMedia;
};

const useStylesCardHeader = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  content: {
    overflow: "hidden",
  },
}));

const useStyles = makeStyles(() => ({
  avatar: {
    background: "transparent",
  },
}));

export const SocialMediaCard = (props: ISocialMediaCardProps) => {
  const { socialMedia } = props;

  const classes = useStyles();
  const classesCardHeader = useStylesCardHeader();

  return (
    <Card>
      <CardHeader
        classes={classesCardHeader}
        avatar={
          <Avatar className={classes.avatar} variant="square">
            <Image
              alt={`${socialMedia.name} ${SEO_KEYWORD}`}
              layout="fill"
              src={socialMedia.image}
            />
          </Avatar>
        }
        titleTypographyProps={{ noWrap: true, variant: "h5" }}
        title={socialMedia.name}
      />
    </Card>
  );
};
