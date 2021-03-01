import React from "react";
import { ISettings } from "../../lib/domain/settings";
import { Footer } from "./footer";
import { Meta } from "./meta";
import { Divider, makeStyles } from "@material-ui/core";

export type IPageLayoutProps = {
  title: string;
  settings: ISettings;
};

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(4, 0),
  },
}));

export const PageLayout = (
  props: React.PropsWithChildren<IPageLayoutProps>
) => {
  const classes = useStyles();

  const { children, title, settings } = props;
  return (
    <React.Fragment>
      <Meta
        author={settings.website.author}
        keywords={settings.website.keywords}
        title={title}
        description={settings.band.description}
        url={settings.website.url}
        icon={settings.website.icon}
        image={settings.website.image}
      />
      {children}
      <Divider className={classes.divider} />
      <Footer platformsLinks={settings.band.platformLinks} />
    </React.Fragment>
  );
};
