import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { IHero } from "../../lib/data-access";
import { toHeroHeightStyles } from "./height";

const useStyles = makeStyles((theme) => ({
  root: {
    filter: `invert(1) blur(10px)`,
    zIndex: -1,
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    width: "100%",

    ...toHeroHeightStyles(theme),
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
