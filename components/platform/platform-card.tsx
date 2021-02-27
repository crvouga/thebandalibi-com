import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import { IPlatform } from "../../lib/domain";
import { PlatformAvatar } from "./platform-avatar";

export const PlatformCard = ({ platform }: { platform: IPlatform }) => {
  return (
    <Card>
      <CardHeader
        avatar={<PlatformAvatar platform={platform} />}
        titleTypographyProps={{ noWrap: true, variant: "h5" }}
        title={platform.name}
      />
    </Card>
  );
};
