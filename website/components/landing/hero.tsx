import { IHero } from "@data-access";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Button } from "@components/generic";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  filter: {
    filter: "brightness(40%)",
  },
  imageWrapper: {
    zIndex: -1,
    overflow: "hidden",
  },
  root: {
    maxWidth: theme.breakpoints.values.xl,
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
          className={classes.filter}
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
