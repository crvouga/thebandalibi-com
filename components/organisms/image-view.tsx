import { makeStyles } from "@material-ui/core/styles";
import panzoom from "panzoom";
import { useEffect, useRef } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",

    overflow: "hidden",
    margin: "auto",
  },

  instance: {
    width: "100%",
    height: "100%",
  },

  imageWrapper: {},

  image: {
    maxWidth: theme.breakpoints.values.sm,

    width: "100%",
  },
}));

export const ImageView = ({
  image,
  onClose,
}: {
  onClose?: () => void;
  image: string;
}) => {
  const classes = useStyles();

  const ref = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (ref.current && imageRef.current) {
      const instance = panzoom(ref.current, {});

      const centerX =
        ref.current.offsetWidth / 2 - imageRef.current.offsetWidth / 2;

      instance.moveTo(centerX, 48);

      return () => {
        instance.dispose();
      };
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.instance} ref={ref}>
        <img ref={imageRef} className={classes.image} src={image} />
      </div>
    </div>
  );
};
