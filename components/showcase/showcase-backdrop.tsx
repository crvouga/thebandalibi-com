import { makeStyles } from "@material-ui/core/styles";
import { IShowcase } from "../../lib/contracts";

type IShowcaseBackdropProps = {
  showcase: IShowcase;
};

const useStyles = makeStyles(() => ({
  root: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    backgroundRepeat: "norepeat",
    backgroundPosition: "center center",

    backgroundImage: ({ showcase }: IShowcaseBackdropProps) =>
      `url(${showcase.image})`,

    filter: "opacity(0.25)",
  },
}));

export const ShowcaseBackdrop = (props: IShowcaseBackdropProps) => {
  const classes = useStyles(props);
  return <div className={classes.root} />;
};
