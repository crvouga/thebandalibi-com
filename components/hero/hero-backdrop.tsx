import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { IHero } from "../../lib/domain";
import { preventGitterWhenMobileBrowserBarsShrinksStyles } from "./hero";

const useStyles = makeStyles((theme) => ({
  root: {
    filter: `blur(12px)`,
    zIndex: -1,
    position: "absolute",
    top: "0",
    left: "0",
    right: "auto",
    height: "100%",
    width: "100%",
    ...preventGitterWhenMobileBrowserBarsShrinksStyles(theme),
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
