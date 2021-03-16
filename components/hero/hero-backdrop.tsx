import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { IHero } from "../../lib/data-access";
import { useHeroHeightStyles } from "./use-hero-height-styles";

const useStyles = makeStyles(() => ({
  root: {
    filter: `blur(10px)`,
    zIndex: -1,
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    width: "100%",
  },
}));

export const HeroBackdrop = ({ hero }: { hero: IHero }) => {
  const heightStyles = useHeroHeightStyles();
  const classes = useStyles();

  return (
    <div className={classes.root} style={heightStyles}>
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
