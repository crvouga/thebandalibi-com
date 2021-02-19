import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import LaunchIcon from "@material-ui/icons/Launch";
import Image from "next/image";
import React from "react";
import { ISocialMedia } from "../../lib/contracts";

type ISocialMediaCardProps = {
  socialMedia: ISocialMedia;
};

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
  },
}));

export const SocialMediaCard = (props: ISocialMediaCardProps) => {
  const { socialMedia } = props;

  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "transparent" }} variant="square">
            <Image
              alt={`${socialMedia.name} the band Alibi`}
              layout="fill"
              src={socialMedia.image}
            />
          </Avatar>
        }
        titleTypographyProps={{ variant: "h5" }}
        title={socialMedia.name}
        action={
          <IconButton aria-label={`${socialMedia.name} the band Alibi`}>
            <LaunchIcon className={classes.icon} />
          </IconButton>
        }
      />
    </Card>
  );
};
