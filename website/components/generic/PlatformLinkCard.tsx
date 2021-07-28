import React from "react";
import { CardActionArea } from "./CardActionArea";
import { PlatformCard } from "./PlatformCard";

export const PlatformLinkCard = ({
  name,
  href,
}: {
  name: string;
  href: string;
}) => {
  return (
    <CardActionArea style={{ borderRadius: "50%" }} href={href}>
      <PlatformCard name={name} />
    </CardActionArea>
  );
};
