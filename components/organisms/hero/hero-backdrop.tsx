import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { IHero } from "../../../lib/contracts";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  image: {
    filter: "opacity(0.25)",
    backgroundRepeat: "norepeat",
    backgroundPosition: "center center",
    backgroundImage: ({ hero }: { hero: IHero }) => `url(${hero.image})`,
  },

  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

export const HeroBackdrop = (props: { hero: IHero }) => {
  const classes = useStyles(props);

  return <div className={clsx(classes.root, classes.image)} />;
};
