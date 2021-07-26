import { Image, Link } from "@components/generic";
import Box from "@material-ui/core/Box";
import React from "react";
import { ROUTES } from "../../config/routes";

export const Logo = () => {
  return (
    <Box sx={{ width: "7em" }}>
      <Link href={ROUTES.landing()}>
        <Image
          aspectRatio={3}
          src="https://fontmeme.com/permalink/210726/1f3f8a356c3ad5d62e5c561aeff152da.png"
          alt="alibi"
        />
      </Link>
    </Box>
  );
};
