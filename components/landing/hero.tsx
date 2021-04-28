// import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IHero } from "../../lib/data-access";
import { fontFamilies } from "../../lib/fonts";
import { AspectRatio } from "../shared/aspect-ratio";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigationState } from "../app/navigation/navigation-state";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
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

  backdrop: {
    filter: `invert(1) blur(10px)`,
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const classes = useStyles();

  const navigationState = useNavigationState();

  const { inView, ref } = useInView();

  useEffect(() => {
    navigationState.setBarState(inView ? "hidden" : "visible");
    return () => {
      navigationState.setBarState("visible");
    };
  }, [inView]);

  return (
    <>
      <Grid
        className={classes.root}
        container
        spacing={2}
        alignItems="center"
        justify="center"
      >
        <div className={classes.backdrop}>
          <Image
            priority
            objectFit="cover"
            alt={`hero background image ${hero.title}`}
            layout="fill"
            src={hero.backgroundImage.url}
          />
        </div>

        <Grid item xs={12} className={classes.main}>
          <Typography
            variant="h1"
            color="textPrimary"
            gutterBottom
            style={{
              fontFamily: fontFamilies.logo,
            }}
            ref={ref}
          >
            Alibi
          </Typography>

          <Typography align="center" variant="h1">
            {hero.title}
          </Typography>

          <Container disableGutters maxWidth="xs">
            <ButtonLink
              href={hero.callToAction.url}
              variant="contained"
              size="large"
              color="primary"
              fullWidth
            >
              {hero.callToAction.title.toUpperCase()}
            </ButtonLink>
          </Container>
        </Grid>

        <Grid item xs={12} sm={6} md={5}>
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
