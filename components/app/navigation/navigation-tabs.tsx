import Tab, { TabProps } from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";
import Link from "next/link";

const a11yProps = <T,>(index: T) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabLink = ({
  pathname,
  index,
  ...props
}: TabProps & { pathname: string; index: number }) => {
  return (
    <Link href={pathname}>
      <Tab color="primary" {...a11yProps(index)} {...props} />
    </Link>
  );
};

export const NavigationTabs = (props: TabsProps) => {
  const router = useRouter();

  const selected = NAVIGATION_ACTIONS.find(
    (action) => router.pathname === action.pathname
  );

  return (
    <Tabs
      color="primary"
      value={selected?.pathname}
      aria-label="navigation tabs"
      {...props}
    >
      {NAVIGATION_ACTIONS.map(({ pathname, label }, index) => (
        <TabLink
          key={pathname}
          pathname={pathname}
          label={label}
          index={index}
          value={pathname}
        />
      ))}
    </Tabs>
  );
};
