import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./constants";
import Typography from "@material-ui/core/Typography";

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
      aria-label="navigation tabs"
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
            label={
              <Typography variant="subtitle1" color="initial">
                {label}
              </Typography>
            }
            {...a11yProps(index)}
          />
        )
      )}
    </Tabs>
  );
};
