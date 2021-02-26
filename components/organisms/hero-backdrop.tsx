import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { IHero } from "../../lib/domain";

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
  const classes = useStyles(props);

  return <div className={clsx(classes.root, classes.image)} />;
};
