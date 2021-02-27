import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { IHero } from "../../lib/domain";
import { SEO_KEYWORD } from "../molecules/meta";
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
    objectFit: "cover",
    maxWidth: "100%",
  },
}));

export const HeroBackdrop = ({ hero }: { hero: IHero }) => {
  const classes = useStyles({ hero });

  return (
    <div className={classes.root}>
      <Image
        priority
        alt={`hero background image ${hero.title} ${SEO_KEYWORD}`}
        className={classes.image}
        layout="fill"
        src={hero.mainImage}
      />
    </div>
  );
};
