import { makeStyles } from "@material-ui/core/styles";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import { NavigationLayout } from "./navigation-layout";
import { PageLoadingLayout } from "./page-loading-layout";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <AnimatePresence>
      <PageLoadingLayout>
        <NavigationLayout>{children}</NavigationLayout>
      </PageLoadingLayout>
    </AnimatePresence>
  );
};

const useStyles = makeStyles(() => ({
  pageLayout: {
    overflowX: "hidden",
  },
}));

export const PageLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.pageLayout}>{children}</div>;
};
