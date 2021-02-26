import { ButtonBase, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IHero } from "../../lib/contracts";
import { AspectRatio } from "../atoms/aspect-ratio";
import { Clickable } from "../atoms/clickable";
import { HeroBackdrop } from "./hero-backdrop";
import { NAV_BAR_HEIGHT } from "./navigation/navigation-constants";

const useStyles = makeStyles((theme) => ({
  image: {
    boxSizing: "border-box",
    borderRadius: theme.spacing(1),
  },

  title: {
    padding: theme.spacing(2, 0),
  },

  root: {
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
      <motion.div initial="out" animate="in" variants={fade} {...one}>
        <HeroBackdrop hero={hero} />
      </motion.div>

      <Hidden smDown>
        <motion.div
          className={classes.seeMore}
          initial="out"
          animate="in"
          variants={grow}
          {...five}
        >
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
        </motion.div>
      </Hidden>

      <Container maxWidth="lg">
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
              <motion.div initial="out" animate="in" variants={grow} {...two}>
                <Typography variant="h2">{hero.title}</Typography>
              </motion.div>
            </Grid>

            <Grid item>
              <motion.div
                style={{ display: "inline-block" }}
                initial="out"
                animate="in"
                variants={grow}
                {...four}
              >
                <Clickable>
                  <Link href={hero.callToAction.url}>
                    <Button variant="contained" size="large">
                      {hero.callToAction.title}
                    </Button>
                  </Link>
                </Clickable>
              </motion.div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Container maxWidth="xs" disableGutters>
              <motion.div initial="out" animate="in" variants={grow} {...three}>
                <AspectRatio ratio={[1, 1]}>
                  <Image
                    className={classes.image}
                    alt={hero.title}
                    layout="fill"
                    src={hero.mainImage}
                  />
                </AspectRatio>
              </motion.div>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
