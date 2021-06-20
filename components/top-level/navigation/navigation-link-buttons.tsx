import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import React from "react";

const useStyles = makeStyles(() => ({
  selected: {
    textDecoration: "underline",
  },
}));

export const NavigationLinkButtons = ({
  links,
}: {
  links: { pathname: string; label: string }[];
}) => {
  const classes = useStyles();

  const router = useRouter();

  const selected = links.find((link) => router.pathname === link.pathname);

  return (
    <Box display="flex">
      {links.map(({ pathname, label }) => (
        <Box key={pathname} marginX={1}>
          <Button
            classes={{
              label:
                selected?.pathname === pathname ? classes.selected : undefined,
            }}
            fullWidth
            size="large"
            href={pathname}
          >
            {label}
          </Button>
        </Box>
      ))}
    </Box>
  );
};
