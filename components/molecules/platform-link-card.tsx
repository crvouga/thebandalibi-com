import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IPlatformLink } from "../../lib/domain";
import { Image } from "../atoms/image";
import { SEO_KEYWORD } from "./meta";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "120px",
    width: "100%",
  },

  avatar: {
    background: "transparent",
  },

  logoWrapper: {
    backgroundColor: "#fefefe",
    width: "50%",
    padding: theme.spacing(2),
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    flex: 1,
  },
}));

export const PlatformLinkCard = (props: { platformLink: IPlatformLink }) => {
  const { platformLink } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.logoWrapper}>
        <Image
          alt={`${platformLink.platform.name} ${SEO_KEYWORD}`}
          image={platformLink.platform.logo}
        />
      </div>
      <Typography align="center" className={classes.name} variant="h3">
        Listen
      </Typography>
    </Card>
  );
};
