import { IHero } from "@data-access";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Button } from "@ui";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  blur: {
    filter: "blur(4px)",
  },
  imageWrapper: {
    zIndex: -1,
    overflow: "hidden",
  },
}));

export const Hero = ({ hero }: { hero: IHero }) => {
  const classes = useStyles();
  return (
    <Container disableGutters>
      <Box
        width="100%"
        position="relative"
        paddingX={2}
        paddingY={24}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <div className={classes.imageWrapper}>
          <Image
            className={classes.blur}
            priority
            layout="fill"
            objectFit="cover"
            src={hero.mainImage.url}
            alt={hero.title}
          />
        </div>

        <Typography style={{ color: "white" }} align="center" variant="h1">
          {hero.title}
        </Typography>

        <Typography
          style={{ color: "white" }}
          align="center"
          variant="h3"
          gutterBottom
        >
          {hero.subtitle}
        </Typography>

        <Button href={hero.callToAction.url} variant="contained" size="large">
          {hero.callToAction.title}
        </Button>
      </Box>
    </Container>
  );
};
