import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { IHero } from "../../lib/contracts";
import { useEffect, useRef } from "react";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  },

  image: {
    filter: "opacity(0.25)",
    backgroundRepeat: "norepeat",
    backgroundPosition: "center center",
    backgroundImage: ({ hero }: { hero: IHero }) => `url(${hero.mainImage})`,
  },

  video: {
    filter: "opacity(0.25)",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
}));

export const HeroBackdrop = (props: { hero: IHero }) => {
  const { hero } = props;

  const classes = useStyles(props);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={clsx(classes.root, classes.image, classes.video)}
      autoPlay
      muted
      loop
    >
      <source src={hero.backgroundVideo} type="video/mp4" />
      <source src={hero.backgroundVideo} type="video/ogg" />
    </video>
  );
};
