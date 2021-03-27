import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IHero } from "../../lib/data-access";
import { AspectRatio } from "../shared/aspect-ratio";
import { CardActionAreaLink, ButtonLink } from "../shared/clickable";
import { toHeroHeightStyles } from "./height";
import { HeroBackdrop } from "./hero-backdrop";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: theme.breakpoints.width("lg"),
    padding: theme.spacing(2),
    ...toHeroHeightStyles(theme),
  },

  image: {
    borderRadius: theme.spacing(1),
  },

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const classes = useStyles();

  return (
    <>
      <HeroBackdrop hero={hero} />

      <Grid
        className={classes.root}
        container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} sm={6} className={classes.main}>
          <Typography align="center" variant="h1">
            {hero.title}
          </Typography>

          <ButtonLink
            href={hero.callToAction.url}
            variant="contained"
            size="large"
          >
            {hero.callToAction.title.toUpperCase()}
          </ButtonLink>
        </Grid>

        <Grid item xs={12} sm={6}>
          <CardActionAreaLink href={hero.callToAction.url}>
            <Paper variant="outlined">
              <AspectRatio ratio={[1, 1]}>
                <Image
                  priority
                  className={classes.image}
                  alt={hero.title}
                  layout="fill"
                  src={hero.mainImage.url}
                />
              </AspectRatio>
            </Paper>
          </CardActionAreaLink>
        </Grid>
      </Grid>
    </>
  );
};
