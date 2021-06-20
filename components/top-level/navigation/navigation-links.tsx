import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Button } from "@ui";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  selected: {
    fontWeight: "bolder",
    color: theme.palette.text.primary,
  },
  unselected: {
    fontWeight: "lighter",
    color: theme.palette.text.secondary,
  },
}));

export const NavigationLinks = ({
  orientation,
  links,
}: {
  orientation: "vertical" | "horizontal";
  links: { pathname: string; label: string }[];
}) => {
  const router = useRouter();

  const selected = links.find((link) => router.pathname === link.pathname);

  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection={orientation === "horizontal" ? "row" : "column"}
    >
      {links.map(({ pathname, label }) => (
        <Box key={pathname} marginX={1}>
          <Button
            fullWidth
            size="large"
            className={
              selected?.pathname === pathname
                ? classes.selected
                : classes.unselected
            }
            href={pathname}
          >
            {label}
          </Button>
        </Box>
      ))}
    </Box>
  );
};
