import Card from "@material-ui/core/Card";
import CardHeader, { CardHeaderProps } from "@material-ui/core/CardHeader";
import React from "react";
import { IPlatform } from "../../lib/domain";
import { PlatformAvatar } from "./platform-avatar";

export const PlatformCard = ({
  platform,
  CardHeaderProps,
}: {
  platform: IPlatform;
  CardHeaderProps?: CardHeaderProps;
}) => {
  return (
    <Card>
      <CardHeader
        avatar={<PlatformAvatar platform={platform} />}
        titleTypographyProps={{
          noWrap: true,
          variant: "h5",
        }}
        title={platform.name}
        {...CardHeaderProps}
      />
    </Card>
  );
};
