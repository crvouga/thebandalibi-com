import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IImageGallery, IProduct, IRelease } from "../../lib/data-access";
import { ISettings } from "../../lib/data-access/settings";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { Gutter } from "../app/navigation/gutter";
import { NavigationBarLogo } from "../app/navigation/navigation-bar-logo";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { ReleaseCard } from "../release/release-card";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../video/video-state";
import { Hero } from "./hero";
import Box from "@material-ui/core/Box";

export type ILandingProps = {
  settings: ISettings;
  imageGalleries: IImageGallery[];
  releases: IRelease[];
  products: IProduct[];
};

const useStyles = makeStyles((theme) => ({
  topNav: {
    backgroundColor: theme.palette.background.default,
  },

  main: {
    paddingTop: theme.spacing(2),
  },

  section: {
    padding: theme.spacing(2, 0),
  },

  sectionHeader: {
    paddingBottom: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Section = ({
  title,
  action,
  children,
}: {
  title: React.ReactNode;
  action: React.ReactNode;
  children: React.ReactChild;
}) => {
  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      marginBottom={2}
    >
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {title}
          {action}
        </Box>
      </Container>
      <Container disableGutters>{children}</Container>
    </Box>
  );
};

export const Landing = (props: ILandingProps) => {
  const { imageGalleries, releases, settings } = props;

  const classes = useStyles();

  const videoState = useVideoState();

  return (
    <PageLayout
      title={formatTitle(settings.band.name, "Official Site")}
      settings={settings}
    >
      <Hidden smUp implementation="css">
        <NavigationBarLogo className={classes.topNav} settings={settings} />
        <Gutter />
      </Hidden>

      <Hero hero={settings.landingPage.heros[0]} />

      <Section
        title={<Typography variant="h2">Videos</Typography>}
        action={<ButtonLink href={routes.allVideos()}>See All</ButtonLink>}
      >
        <VideoCardGrid
          onClick={videoState.openVideo}
          videos={settings.landingPage.videos.slice(0, 3)}
        />
      </Section>

      <Section
        title={<Typography variant="h2">Photos</Typography>}
        action={
          <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
        }
      >
        <UniformGrid>
          {imageGalleries.slice(0, 3).map((imageGallery) => (
            <CardActionAreaLink
              key={imageGallery.slug}
              href={routes.singleImageGallery(imageGallery.slug)}
            >
              <ImageGalleryCard imageGallery={imageGallery} />
            </CardActionAreaLink>
          ))}
        </UniformGrid>
      </Section>

      <Section
        title={<Typography variant="h2">Music</Typography>}
        action={<ButtonLink href={routes.allReleases()}>See All</ButtonLink>}
      >
        <UniformGrid>
          {releases.slice(0, 3).map((release) => (
            <CardActionAreaLink
              key={release.slug}
              href={routes.singleRelease(release.slug)}
            >
              <ReleaseCard release={release} />
            </CardActionAreaLink>
          ))}
        </UniformGrid>
      </Section>
    </PageLayout>
  );
};
