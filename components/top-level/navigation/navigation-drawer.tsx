import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useNavigationState } from "./navigation-state";
import { useRouterHandlers } from "./use-router-handlers";
import { useRouter } from "next/router";

export const NavigationDrawer = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
  const navigationState = useNavigationState();

  const handleClose = () => {
    navigationState.setDrawerState("closed");
  };

  useRouterHandlers({
    onRouteChangeComplete: handleClose,
  });

  const router = useRouter();

  const selected = links.find((link) => router.pathname === link.pathname);

  return (
    <Drawer
      open={navigationState.drawerState === "opened"}
      onClose={() => {
        navigationState.setDrawerState("closed");
      }}
      anchor="bottom"
      keepMounted
    >
      <List>
        {links.map(({ label, pathname }) => (
          <Link key={pathname} href={pathname}>
            <ListItem button selected={selected?.pathname === pathname}>
              <ListItemText
                primaryTypographyProps={{ align: "center" }}
                primary={label}
              />
            </ListItem>
          </Link>
        ))}

        <Divider />

        <ListItem button onClick={handleClose}>
          <ListItemText
            primaryTypographyProps={{ align: "center" }}
            primary={"Close"}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};
