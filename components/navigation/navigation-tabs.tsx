import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./constants";

const a11yProps = <T,>(index: T) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  tabs: {
    // width: "100%",
  },
}));

export const NavigationTabs = (props: TabsProps) => {
  const router = useRouter();

  const classes = useStyles();

  return (
    <Tabs
      className={classes.tabs}
      value={router.pathname}
      aria-label="navigation tabs"
      {...props}
    >
      {NAVIGATION_ACTIONS.map(
        ({ OutlinedIcon, FilledIcon, pathname, label }, index) => (
          <Tab
            key={pathname}
            value={pathname}
            icon={
              router.pathname === pathname ? <FilledIcon /> : <OutlinedIcon />
            }
            onClick={() => {
              router.push(pathname);
            }}
            label={label}
            {...a11yProps(index)}
          />
        )
      )}
    </Tabs>
  );
};
