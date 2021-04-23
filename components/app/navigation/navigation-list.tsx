import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_ACTIONS } from "./navigation-constants";

export const NavigationVerticalList = () => {
  const router = useRouter();

  const selected = NAVIGATION_ACTIONS.find(
    (action) => router.pathname === action.pathname
  );

  return (
    <List>
      {NAVIGATION_ACTIONS.map(({ pathname, label }) => (
        <Link key={pathname} href={pathname}>
          <ListItem selected={selected?.pathname === pathname} button>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
