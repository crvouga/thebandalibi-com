import Image from "next/image";
import Link from "next/link";
import React from "react";
import AspectRatio from "react-aspect-ratio";
import { ISettings } from "../../lib/data-access";
import { routes } from "../../lib/routes";

export const Logo = ({ settings }: { settings: ISettings }) => {
  return (
    <Link href={routes.landing()}>
      <AspectRatio ratio={2} style={{ width: "100px" }}>
        <Image
          layout="fill"
          src={settings.band.logo}
          alt={settings.band.name}
        />
      </AspectRatio>
    </Link>
  );
};
