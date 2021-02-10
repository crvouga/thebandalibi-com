import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./constants";

const a11yProps = <T,>(index: T) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-${index}`,
  };
};

export const NavigationTabs = () => {
  const router = useRouter();

  return (
    <Tabs
      value={router.pathname}
      color="primary"
      aria-label="navigation tabs"
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      centered
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
