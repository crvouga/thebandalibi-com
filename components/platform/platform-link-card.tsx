import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import { IPlatformLink } from "../../lib/domain";
import { PlatformAvatar } from "./platform-avatar";

export const PlatformLinkCard = (props: { platformLink: IPlatformLink }) => {
  const { platformLink } = props;

  return (
    <Card>
      <CardHeader
        avatar={<PlatformAvatar platform={platformLink.platform} />}
        titleTypographyProps={{ variant: "h5" }}
        title={platformLink.platform.name}
        subheader="Listen Here"
      />
    </Card>
  );
};
