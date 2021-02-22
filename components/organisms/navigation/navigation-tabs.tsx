import Tab from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";

const a11yProps = <T,>(index: T) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-${index}`,
  };
};

export const NavigationTabs = (props: TabsProps) => {
  const router = useRouter();

  const selected = NAVIGATION_ACTIONS.find(
    (action) => router.pathname.split("/")[1] === action.pathname.split("/")[1]
  );

  return (
    <Tabs
      value={selected ? selected.pathname : undefined}
      aria-label="navigation tabs"
      {...props}
    >
      {NAVIGATION_ACTIONS.map(
        ({ pathname, label, FilledIcon, OutlinedIcon }, index) => (
          <Tab
            key={pathname}
            value={pathname}
            icon={
              selected && selected.pathname === pathname ? (
                <FilledIcon />
              ) : (
                <OutlinedIcon />
              )
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
