import Tab, { TabProps } from "@material-ui/core/Tab";
import Tabs, { TabsProps } from "@material-ui/core/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NAVIGATION_ACTIONS } from "./navigation-constants";

const a11yProps = <T,>(index: T) => {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-${index}`,
  };
};

export const NavigationTab = ({
  href,
  ...TabProps
}: TabProps & { href: string }) => {
  return (
    <Link href={href}>
      <Tab {...TabProps} />
    </Link>
  );
};

export const NavigationTabs = (props: TabsProps) => {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const updateValue = () => {
    const newValue = NAVIGATION_ACTIONS.findIndex(
      (navigationAction) =>
        router.pathname.split("/")[1] ===
        navigationAction.pathname.split("/")[1]
    );
    setValue(Math.max(0, newValue));
  };

  console.log({ value });

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    updateValue();
  }, [router.pathname]);

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="navigation tabs"
      {...props}
    >
      {NAVIGATION_ACTIONS.map(({ pathname, label }, index) => (
        <NavigationTab
          key={pathname}
          href={pathname}
          label={label}
          {...a11yProps(index)}
        />
      ))}
    </Tabs>
  );
};
