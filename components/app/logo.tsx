import Image from "next/image";
import React from "react";
import AspectRatio from "react-aspect-ratio";
import { routes } from "../../lib/routes";
import { ISettings } from "../../lib/data-access";
import { ClickableLink } from "../shared/clickable";

export const Logo = ({ settings }: { settings: ISettings }) => {
  return (
    <ClickableLink href={routes.landing()}>
      <AspectRatio ratio={2} style={{ width: "100px" }}>
        <Image
          layout="fill"
          src={settings.band.logo}
          alt={settings.band.name}
        />
      </AspectRatio>
    </ClickableLink>
  );
};
