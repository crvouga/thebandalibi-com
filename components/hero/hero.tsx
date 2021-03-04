import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IHero } from "../../lib/domain";
import { AspectRatio } from "../@shared/aspect-ratio";
import { HeroBackdrop } from "./hero-backdrop";
import { Container } from "@material-ui/core";

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

    minHeight: "100vh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0, 4, 0),
    position: "relative",
  },

  scrollDownButton: {
    zIndex: theme.zIndex.appBar - 1,
    position: "absolute",
    top: "auto",

    bottom: theme.spacing(2),

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  scrollDownIcon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  hideNavTrigger: {
    position: "absolute",
    top: "20%",
    left: "auto",
    right: "auto",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    margin: "auto",
    padding: theme.spacing(2),
    height: "100%",
    maxHeight: "100%",
    maxWidth: theme.breakpoints.width("lg"),
  },
}));

const scrollDown = () => {
  window.scroll({
    behavior: "smooth",
    top: window.innerHeight,
  });
};

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const classes = useStyles({ ...props });

  return (
    <div className={classes.root}>
      <HeroBackdrop hero={hero} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.main}>
            <Typography align="center" variant="h1">
              {hero.title}
            </Typography>
            <Link href={hero.callToAction.url}>
              <Button variant="contained" size="large">
                {hero.callToAction.title}
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6}>
            <AspectRatio ratio={[1, 1]}>
              <Image
                priority
                className={classes.image}
                alt={hero.title}
                layout="fill"
                src={hero.mainImage.url}
              />
            </AspectRatio>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
