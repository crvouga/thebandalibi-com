import { Button } from "@components/generic";
import { IHero } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { css } from "@emotion/css";

import Typography from "@material-ui/core/Typography";
import Image from "next/image";

export const Hero = ({ hero }: { hero: IHero }) => {
  const theme = useTheme();

  const className = css`
    filter: brightness(40%);
  `;

  return (
    <Box
      sx={{
        maxWidth: theme.breakpoints.values.xl,
        margin: "auto",
        width: "100%",
        position: "relative",
        padding: theme.spacing(24, 2),
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <Image
          className={className}
          priority
          layout="fill"
          objectFit="cover"
          src={hero.mainImage.url}
          alt={hero.title}
        />
      </Box>

      <Typography color="inherit" align="center" variant="h1">
        {hero.title}
      </Typography>

      <Button href={hero.callToAction.url} variant="contained" size="large">
        {hero.callToAction.title}
      </Button>
    </Box>
  );
};
