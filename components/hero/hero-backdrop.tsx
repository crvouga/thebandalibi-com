import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { IHero } from "../../lib/data-access";

const useStyles = makeStyles(() => ({
  root: {
    filter: `blur(10px)`,
    zIndex: -1,
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    height: "100vh",
    width: "100%",
  },
}));

export const HeroBackdrop = ({ hero }: { hero: IHero }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image
        priority
        objectFit="cover"
        alt={`hero background image ${hero.title}`}
        layout="fill"
        src={hero.backgroundImage.url}
      />
    </div>
  );
};
