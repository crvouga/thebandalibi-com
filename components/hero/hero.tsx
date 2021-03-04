import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Link from "next/link";
import { IHero } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";
import { HeroBackdrop } from "./hero-backdrop";
import { ClickableLink } from "../@shared/clickable";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    height: "100%",
    maxWidth: theme.breakpoints.width("lg"),
    padding: theme.spacing(2),
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

  const classes = useStyles({ ...props });

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
          <ClickableLink href={hero.callToAction.url}>
            <Button variant="contained" size="large">
              {hero.callToAction.title}
            </Button>
          </ClickableLink>
        </Grid>

        <Grid item xs={12} sm={6}>
          <ClickableLink href={hero.callToAction.url}>
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
          </ClickableLink>
        </Grid>
      </Grid>
    </>
  );
};
