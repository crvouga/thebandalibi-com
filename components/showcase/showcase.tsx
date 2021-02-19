import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IShowcase } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";
import { APP_BAR_HEIGHT } from "../navigation/navigation-bar";
import { ShowcaseBackdrop } from "./showcase-backdrop";

export type IShowcaseProps = {
  showcase: IShowcase;
};

const useStyles = makeStyles((theme) => ({
  image: {
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

const variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
  },
  out: {
    y: "-100%",
    opacity: 0,
  },
};

const fade = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const one = {
  transition: {
    delay: 0.5,
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

export const Showcase = (props: IShowcaseProps) => {
  const { showcase } = props;

  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <motion.div initial="initial" animate="in" variants={fade}>
        <ShowcaseBackdrop showcase={showcase} />
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
              <motion.div
                initial="initial"
                animate="in"
                variants={variants}
                {...one}
              >
                <Typography variant="h2" gutterBottom>
                  {showcase.title}
                </Typography>
              </motion.div>
            </Grid>

            <Grid>
              <motion.div
                initial="initial"
                animate="in"
                variants={variants}
                {...three}
              >
                <Button
                  variant="contained"
                  size="large"
                  href={showcase.action.url}
                >
                  {showcase.action.title}
                </Button>
              </motion.div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Container maxWidth="xs" disableGutters>
              <motion.div
                initial="initial"
                animate="in"
                variants={variants}
                {...two}
              >
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
