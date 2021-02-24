import { makeStyles } from "@material-ui/core/styles";
import panzoom from "panzoom";
import { useEffect, useRef } from "react";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },

  instance: {
    width: "100%",
    height: "100%",
  },

  image: {
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

  useEffect(() => {
    if (ref.current) {
      const instance = panzoom(ref.current);

      console.log("HELLO");
      return () => {
        instance.dispose();
      };
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.instance} ref={ref}>
        <img className={classes.image} src={image} />
      </div>
    </div>
  );
};
