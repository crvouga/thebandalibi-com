import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { IHero } from "../../lib/contracts";

const useStyles = makeStyles((theme) => ({
  root: {
    filter: "opacity(0.2)",
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  image: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: ({ hero }: { hero: IHero }) => `url(${hero.mainImage})`,
  },

  video: {
    objectFit: "cover",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
}));

export const HeroBackdrop = (props: { hero: IHero }) => {
  const { hero } = props;

  const classes = useStyles(props);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (hero.backgroundVideo && !isSmallScreen && !isMobile) {
    return (
      <div className={classes.root}>
        <video
          ref={videoRef}
          className={classes.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={hero.backgroundVideo} type="video/mp4" />
          <source src={hero.backgroundVideo} type="video/ogg" />
        </video>
      </div>
    );
  }

  return <div className={clsx(classes.root, classes.image)} />;
};
