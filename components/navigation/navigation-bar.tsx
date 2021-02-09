import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Logo } from "../logo";
import { NavigationLink } from "./navigation-link";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { useRouter } from "next/router";

type INavigationLinkProps = {
  label: string;
  href: string;
};

const NAVIGATION_LINK_PROPS_LIST: INavigationLinkProps[] = [
  {
    label: "Music",
    href: "/music",
  },
  {
    label: "Videos",
    href: "/videos",
  },
  {
    label: "Photos",
    href: "/photos",
  },
];

const useStyles = makeStyles(() => ({
  navigationLinkList: {
    display: "flex",
  },
  logo: {
    flex: 1,
  },
}));

export const NavigationBar = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link href="/">
          <Logo className={classes.logo} />
        </Link>

        <div className={classes.navigationLinkList}>
          {NAVIGATION_LINK_PROPS_LIST.map((props) => (
            <NavigationLink
              highlighted={router.pathname === props.href}
              key={JSON.stringify(props)}
              {...props}
            />
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};
