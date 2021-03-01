import { ButtonBase, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Image from "next/image";
import Link from "next/link";
import { IHero } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";
import { HeroBackdrop } from "./hero-backdrop";
import { NAV_BAR_HEIGHT } from "../app/navigation/navigation-constants";

const useStyles = makeStyles((theme) => ({
  image: {
    boxSizing: "border-box",
    borderRadius: theme.spacing(1),
  },

  title: {
    padding: theme.spacing(2, 0),
  },

  root: {
    overflow: "hidden",
    margin: "auto",

    height: `calc(100vh - ${NAV_BAR_HEIGHT})`,
    maxHeight: theme.breakpoints.values.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0, 4, 0),
    position: "relative",
  },

  seeMore: {
    zIndex: theme.zIndex.appBar - 1,
    position: "absolute",
    top: "auto",
    bottom: `calc(${NAV_BAR_HEIGHT} + ${theme.spacing(4)}px)`,

    [theme.breakpoints.up("sm")]: {
      bottom: theme.spacing(4),
    },

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  seeMoreButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
  },
}));

const grow = {
  in: {
    scale: 1,
    opacity: 1,
  },
  out: {
    scale: 0,
    opacity: 0,
  },
};

const fade = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const one = {
  transition: {
    delay: 0,
  },
};

const two = {
  transition: {
    delay: one.transition.delay + 1 / 3,
  },
};

const three = {
  transition: {
    delay: two.transition.delay + 1 / 3,
  },
};

const four = {
  transition: {
    delay: three.transition.delay + 1 / 3,
  },
};

const five = {
  transition: {
    delay: three.transition.delay + 1 / 2,
  },
};

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <HeroBackdrop hero={hero} />

      <Hidden smDown>
        <div className={classes.seeMore}>
          <ButtonBase
            className={classes.seeMoreButton}
            onClick={() => {
              window.scroll({
                behavior: "smooth",
                top: window.innerHeight - 58,
              });
            }}
          >
            <Typography gutterBottom variant="h6" color="initial">
              See More
            </Typography>

            <ArrowDownwardIcon />
          </ButtonBase>
        </div>
      </Hidden>

      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            direction="column"
            container
            justify="center"
          >
            <Grid item className={classes.title}>
              <Typography variant="h2">{hero.title}</Typography>
            </Grid>

            <Grid item>
              <Link href={hero.callToAction.url}>
                <Button variant="contained" size="large">
                  {hero.callToAction.title}
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Container maxWidth="xs" disableGutters>
              <AspectRatio ratio={[1, 1]}>
                <Image
                  priority
                  className={classes.image}
                  alt={hero.title}
                  layout="fill"
                  src={hero.mainImage.url}
                />
              </AspectRatio>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
