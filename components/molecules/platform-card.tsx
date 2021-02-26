import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { IPlatform } from "../../lib/contracts";
import { PlatformAvatar } from "./platform-avatar";

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

export const PlatformCard = (props: { platform: IPlatform }) => {
  const { platform } = props;

  const classes = useStyles();
  const classesCardHeader = useStylesCardHeader();

  return (
    <Card>
      <CardHeader
        classes={classesCardHeader}
        avatar={<PlatformAvatar platform={platform} />}
        titleTypographyProps={{ noWrap: true, variant: "h5" }}
        title={platform.name}
      />
    </Card>
  );
};
