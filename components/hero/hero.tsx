import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IHero } from "../../lib/domain";
import { useStore } from "../../lib/state-store";
import { AspectRatio } from "../@shared/aspect-ratio";
import { HeroBackdrop } from "./hero-backdrop";

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

    height: "100%",
    // maxHeight: theme.breakpoints.values.md,
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
}));

const useHideNavigation = () => {
  const store = useStore();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    store.setState((state) => {
      state.navigation.isVisible = !inView;
    });
    return () => {
      store.setState((state) => {
        state.navigation.isVisible = true;
      });
    };
  }, [inView]);

  return ref;
};

const scrollDown = () => {
  window.scroll({
    behavior: "smooth",
    top: window.innerHeight,
  });
};

const useWindowDimensions = () => {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    };
  }

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return {
    width,
    height,
  };
};

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  // const { height } = useWindowDimensions();

  const classes = useStyles({ ...props });

  const triggerRef = useHideNavigation();

  return (
    <div className={classes.root}>
      <div ref={triggerRef} className={classes.hideNavTrigger} />

      <HeroBackdrop hero={hero} />

      <IconButton
        className={classes.scrollDownButton}
        aria-label="see more of page"
        onClick={scrollDown}
      >
        <KeyboardArrowDownIcon className={classes.scrollDownIcon} />
      </IconButton>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              style={{ letterSpacing: "18px" }}
              align="center"
              variant="h1"
            >
              ALIBI
            </Typography>
          </Grid>
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
