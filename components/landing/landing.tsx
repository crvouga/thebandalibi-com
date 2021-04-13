import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { IImageGallery, IRelease, IProduct } from "../../lib/data-access";
import { ISettings } from "../../lib/data-access/settings";
import { routes } from "../../lib/routes";
import { PageLayout } from "../app/layout";
import { formatTitle } from "../app/meta";
import { Hero } from "./hero";
import { ImageGalleryCard } from "../image/image-gallery-card";
import { Gutter } from "../app/navigation/gutter";
import { NavigationBarLogo } from "../app/navigation/navigation-bar-logo";
import { ReleaseCard } from "../release/release-card";
import { ButtonLink, CardActionAreaLink } from "../shared/clickable";
import { UniformGrid } from "../shared/uniform-grid";
import { VideoCardGrid } from "../video/video-card-grid";
import { useVideoState } from "../video/video-state";
import { ShopProductCard } from "../shop/shop-product-card";

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
    paddingBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const Landing = (props: ILandingProps) => {
  const { imageGalleries, releases, settings, products } = props;

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

      <Container component="main" className={classes.main}>
        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Videos</Typography>
            <ButtonLink href={routes.allVideos()}>See All</ButtonLink>
          </div>

          <VideoCardGrid
            onClick={videoState.openVideo}
            videos={settings.landingPage.videos.slice(0, 3)}
          />
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Merch</Typography>
            <ButtonLink href={routes.shop()}>See All</ButtonLink>
          </div>

          <UniformGrid>
            {products.slice(0, 3).map((product) => (
              <CardActionAreaLink
                key={product.id}
                href={routes.singleShopProduct(product.id)}
              >
                <ShopProductCard product={product} />
              </CardActionAreaLink>
            ))}
          </UniformGrid>
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Photos</Typography>
            <ButtonLink href={routes.allImageGalleries()}>See All</ButtonLink>
          </div>

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
        </section>

        <section className={classes.section}>
          <div className={classes.sectionHeader}>
            <Typography variant="h2">Music</Typography>
            <ButtonLink href={routes.allReleases()}>See All</ButtonLink>
          </div>

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
        </section>
      </Container>
    </PageLayout>
  );
};
