import { makeStyles } from "@material-ui/core/styles";
import { AnimateSharedLayout } from "framer-motion";
import { PropsWithChildren } from "react";
import { NavigationLayout } from "./navigation-layout";
import { PageLoadingLayout } from "./page-loading-layout";

export const AppLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <NavigationLayout>
      <PageLoadingLayout>
        <AnimateSharedLayout>{children}</AnimateSharedLayout>
      </PageLoadingLayout>
    </NavigationLayout>
  );
};

const useStyles = makeStyles((theme) => ({
  pageLayout: {
    padding: theme.spacing(0, 2),
    overflowX: "hidden",
  },
}));

export const PageLayout = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.pageLayout}>{children}</div>;
};
