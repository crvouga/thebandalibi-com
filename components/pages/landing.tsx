import { Hidden } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { routes } from "../../constants/routes";
import { IImageGallery, IRelease } from "../../lib/domain";
import { ISettings } from "../../lib/domain/settings";
import { ButtonLink, ClickableLink } from "../@shared/clickable";
import { UniformGrid } from "../@shared/uniform-grid";
import { DocumentTitle } from "../app/meta";
import { Gutter } from "../app/navigation/gutter";
import { NavigationBarLogo } from "../app/navigation/navigation-bar-logo";
import { PageLayout } from "../app/page-layout";
import { Hero } from "../hero/hero";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ReleaseCard } from "../release/release-card";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";

export type ILandingProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
  releases: IRelease[];
};

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(2),
  },

  section: {
    padding: theme.spacing(2, 0),
  },

  sectionHeader: {
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const Landing = (props: ILandingProps) => {
  const { imageGalleries, releases, settings } = props;

  const classes = useStyles();

  return (
    <PageLayout
      title={DocumentTitle(settings.band.name, "Official Site")}
      settings={settings}
    >
      <Hidden smUp implementation="css">
        <NavigationBarLogo />
        <Gutter />
      </Hidden>

      <Hero hero={settings.landingPage.heros[0]} />

      <Container component="main" className={classes.main}>
        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Videos</Typography>
            <ButtonLink href={routes.allVideoGalleries()}>See All</ButtonLink>
          </div>

          <VideoCardGridWithPlayer
            videos={settings.landingPage.videos.slice(0, 3)}
          />
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Photos</Typography>
            <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
          </div>

          <UniformGrid>
            {imageGalleries.slice(0, 3).map((imageGallery) => (
              <ClickableLink
                key={imageGallery.slug}
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <ImageGalleryCard imageGallery={imageGallery} />
              </ClickableLink>
            ))}
          </UniformGrid>
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Music</Typography>
            <ButtonLink href={routes.allReleases()}>See All</ButtonLink>
          </div>

          <UniformGrid>
            {releases.slice(0, 3).map((release) => (
              <ClickableLink
                key={release.slug}
                href={routes.singleRelease(release.slug)}
              >
                <ReleaseCard release={release} />
              </ClickableLink>
            ))}
          </UniformGrid>
        </section>
      </Container>
    </PageLayout>
  );
};
