import React from "react";
import { CardActionArea } from "./CardActionArea";
import { PlatformCard } from "./PlatformCard";

export const PlatformLinkCard = ({
  name,
  url,
}: {
  name: string;
  url: string;
}) => {
  return (
    <CardActionArea style={{ borderRadius: "50%" }} href={url}>
      <PlatformCard name={name} />
    </CardActionArea>
  );
};
