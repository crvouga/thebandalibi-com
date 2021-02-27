import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { IHero } from "../../lib/domain";
import { SEO_KEYWORD } from "../app/meta";
const useStyles = makeStyles((theme) => ({
  root: {
    filter: "opacity(0.2)",
    zIndex: -1,
    position: "absolute",
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
    height: "100%",

    width: theme.breakpoints.values.lg,
  },
}));

export const HeroBackdrop = ({ hero }: { hero: IHero }) => {
  const classes = useStyles({ hero });

  return (
    <div className={classes.root}>
      <Image
        priority
        objectFit="cover"
        alt={`hero background image ${hero.title} ${SEO_KEYWORD}`}
        layout="fill"
        src={hero.mainImage}
      />
    </div>
  );
};
