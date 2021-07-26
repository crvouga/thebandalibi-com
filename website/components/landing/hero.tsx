import { Button } from "@components/generic";
import { IHero } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import classes from "./hero.module.css";

export const Hero = ({ hero }: { hero: IHero }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: theme.breakpoints.values.xl,
        margin: "auto",
        width: "100%",
        position: "relative",
        paddingX: 2,
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
          className={classes.dim}
          priority
          layout="fill"
          objectFit="cover"
          src={hero.mainImage.url}
          alt={hero.title}
        />
      </Box>

      <Typography align="center" variant="h1" sx={{ marginBottom: 2 }}>
        {hero.title}
      </Typography>

      <Button href={hero.callToAction.url} variant="contained" size="large">
        {hero.callToAction.title}
      </Button>
    </Box>
  );
};
