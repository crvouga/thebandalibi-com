import { Avatar, Card, CardHeader, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Image from "next/image";
import React from "react";
import { ISocialMedia } from "../../lib/contracts";

type ISocialMediaCardProps = {
  socialMedia: ISocialMedia;
};

export const SocialMediaCard = (props: ISocialMediaCardProps) => {
  const { socialMedia } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "transparent" }} variant="square">
            <Image
              alt={`${socialMedia.name} the band alibi`}
              layout="fill"
              src={socialMedia.image}
            />
          </Avatar>
        }
        titleTypographyProps={{ variant: "h5", noWrap: true }}
        title={socialMedia.name}
        action={
          <IconButton>
            <PlayArrowIcon />
          </IconButton>
        }
      />
    </Card>
  );
};
