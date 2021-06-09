import { IHero } from "@data-access";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Button } from "@ui";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  blur: {
    filter: "blur(4px)",
  },
  imageWrapper: {
    zIndex: -1,
    overflow: "hidden",
  },
  root: {
    maxWidth: theme.breakpoints.width("lg"),
    margin: "auto",
    width: "100%",
    position: "relative",
    padding: theme.spacing(24, 2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    color: "#fff",
  },
}));

export const Hero = ({ hero }: { hero: IHero }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageWrapper}>
        <Image
          className={classes.blur}
          priority
          layout="fill"
          objectFit="cover"
          src={hero.mainImage.url}
          alt={hero.title}
        />
      </div>

      <Typography className={classes.title} align="center" variant="h1">
        {hero.title}
      </Typography>

      <Button href={hero.callToAction.url} variant="contained" size="large">
        {hero.callToAction.title}
      </Button>
    </div>
  );
};
