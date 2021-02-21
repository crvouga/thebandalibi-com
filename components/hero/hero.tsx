import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import { IShowcase } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";
import { APP_BAR_HEIGHT } from "../navigation/navigation-bar";
import { HeroBackdrop } from "./hero-backdrop";

export type IShowcaseProps = {
  showcase: IShowcase;
};

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: theme.spacing(1),
  },

  video: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(1),
  },

  root: {
    height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
    maxHeight: theme.breakpoints.values.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0, 4, 0),
    position: "relative",
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

export const Hero = (props: IShowcaseProps) => {
  const { showcase } = props;

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <motion.div initial="out" animate="in" variants={fade} {...one}>
        <HeroBackdrop showcase={showcase} />
      </motion.div>

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
            <Grid item>
              <motion.div initial="out" animate="in" variants={grow} {...two}>
                <Typography variant="h2" gutterBottom>
                  {showcase.title}
                </Typography>
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
                <Button
                  variant="contained"
                  size="large"
                  href={showcase.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {showcase.action.title}
                </Button>
              </motion.div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Container maxWidth="xs" disableGutters>
              <motion.div initial="out" animate="in" variants={grow} {...three}>
                <AspectRatio ratio={[1, 1]}>
                  <Image
                    className={classes.image}
                    alt={showcase.title}
                    layout="fill"
                    src={showcase.image}
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
