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

export const NavigationTabs = (props: TabsProps) => {
  const router = useRouter();

  return (
    <Tabs
      value={
        NAVIGATION_ACTIONS.find((action) => router.pathname === action.pathname)
          ? router.pathname
          : undefined
      }
      aria-label="navigation tabs"
      {...props}
    >
      {NAVIGATION_ACTIONS.map(({ pathname, label }, index) => (
        <Tab
          key={pathname}
          value={pathname}
          onClick={() => {
            router.push(pathname);
          }}
          label={label}
          {...a11yProps(index)}
        />
      ))}
    </Tabs>
  );
};
