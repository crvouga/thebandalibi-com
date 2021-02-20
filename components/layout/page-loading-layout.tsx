import Fade from "@material-ui/core/Fade";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

const usePageLoadingState = () => {
  const router = useRouter();

  const [isDone, setIsDone] = useState(true);
  const [value, setValue] = useState(0);

  const handlerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const start = () => {
      if (handlerRef.current) {
        clearInterval(handlerRef.current);
      }

      setValue(1);

      setIsDone(false);

      let runningValue = 0;
      handlerRef.current = setInterval(() => {
        runningValue = runningValue + (100 - runningValue) / 10;
        setValue(runningValue);
      }, 1000 / 5);
    };

    const done = () => {
      if (handlerRef.current) {
        clearInterval(handlerRef.current);
      }

      setValue(100);

      setTimeout(() => {
        setIsDone(true);
      }, 1000 / 3);
    };

    const handleRouteChangeStart = (url: string) => {
      start();
    };

    const handleRouteChangeComplete = () => {
      done();
    };

    const handleRouteChangeError = () => {
      done();
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return {
    isDone,
    value,
  };
};

const useStyles = makeStyles((theme) => ({
  progress: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    backgroundColor: "transparent",
    zIndex: theme.zIndex.snackbar,
  },
}));

export const PageLoadingLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;

  const { isDone, value } = usePageLoadingState();

  const classes = useStyles();

  return (
    <>
      <Fade in={!isDone} unmountOnExit mountOnEnter>
        <LinearProgress
          color="secondary"
          className={classes.progress}
          variant="determinate"
          value={value}
        />
      </Fade>
      {children}
    </>
  );
};
