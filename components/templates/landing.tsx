import { makeStyles, Typography, Hidden } from "@material-ui/core";
import React from "react";
import { routes } from "../../constants/routes";
import { IImageGallery, IRelease } from "../../lib/domain";
import { ISettings } from "../../lib/domain/settings";
import { ButtonLink } from "../@shared/button-link";
import { ClickableLink } from "../@shared/clickable";
import { Container } from "../@shared/container";
import { Header } from "../@shared/header";
import { ItemGrid } from "../@shared/item-grid";
import { Reveal } from "../@shared/reveal-animation";
import { DocumentTitle } from "../app/meta";
import { PageLayout } from "../app/page-layout";
import { Hero } from "../hero/hero";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { PlatformCard } from "../platform/platform-card";
import { ReleaseCard } from "../release/release-card";
import { VideoCardGridWithPlayer } from "../video/video-card-grid-with-player";
import { NavigationBarSmall } from "../app/navigation/navigation-bar-small";

export type ILandingProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
  releases: IRelease[];
};

const useStyles = makeStyles((theme) => ({
  section: {
    paddingBottom: theme.spacing(4),
  },
}));

export const Landing = (props: ILandingProps) => {
  const { imageGalleries, releases, settings } = props;

  const classes = useStyles();

  return (
    <PageLayout title={DocumentTitle(settings.band.name)} settings={settings}>
      <Hidden smUp>
        <NavigationBarSmall />
      </Hidden>

      <Hero hero={settings.landingPage.heros[0]} />

      <Container>
        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Find Us Here</Typography>
          </Header>

          <ItemGrid
            items={settings.band.platformLinks}
            getItemKey={(platformLink) => platformLink.url}
            renderItem={(platformLink) => (
              <ClickableLink href={platformLink.url}>
                <Reveal>
                  <PlatformCard platform={platformLink.platform} />
                </Reveal>
              </ClickableLink>
            )}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Videos</Typography>
            <ButtonLink href={routes.allVideoGalleries()}>See All</ButtonLink>
          </Header>

          <VideoCardGridWithPlayer
            videos={settings.landingPage.videos.slice(0, 3)}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Photos</Typography>
            <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
          </Header>

          <ItemGrid
            items={imageGalleries.slice(0, 3)}
            getItemKey={(imageGallery) => imageGallery.slug}
            renderItem={(imageGallery) => (
              <ClickableLink
                href={routes.singleImageGallery(imageGallery.slug)}
              >
                <Reveal>
                  <ImageGalleryCard imageGallery={imageGallery} />
                </Reveal>
              </ClickableLink>
            )}
          />
        </section>

        <section className={classes.section}>
          <Header>
            <Typography variant="h3">Music</Typography>
            <ButtonLink href={routes.allReleases()}>See All</ButtonLink>
          </Header>

          <ItemGrid
            items={releases.slice(0, 3)}
            getItemKey={(release) => release.slug}
            renderItem={(release) => (
              <ClickableLink href={routes.singleRelease(release.slug)}>
                <Reveal>
                  <ReleaseCard release={release} />
                </Reveal>
              </ClickableLink>
            )}
          />
        </section>
      </Container>
    </PageLayout>
  );
};
