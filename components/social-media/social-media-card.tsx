import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  ListItem,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import LaunchIcon from "@material-ui/icons/Launch";
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
            <Box color="text.secondary">
              <LaunchIcon color="inherit" />
            </Box>
          </IconButton>
        }
      />
    </Card>
  );
};
