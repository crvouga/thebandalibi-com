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

  filter: {
    filter: "opacity(0.25)",
  },

  image: {
    backgroundRepeat: "norepeat",
    backgroundPosition: "center center",
    backgroundImage: ({ hero }: { hero: IHero }) => `url(${hero.mainImage})`,
  },

  video: {
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

  if (hero.backgroundVideo) {
    return (
      <video
        ref={videoRef}
        className={clsx(classes.root, classes.filter, classes.video)}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={hero.backgroundVideo} type="video/mp4" />
        <source src={hero.backgroundVideo} type="video/ogg" />
      </video>
    );
  }

  return <div className={clsx(classes.root, classes.filter, classes.image)} />;
};
