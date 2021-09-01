import {
  Image,
  Button,
  PlatformButton,
  SwipeableViews,
} from "@components/generic";
import { PageNavBar, PageFooterButt } from "@components/shared";
import { PageSeo } from "@components/shared/page-wrapper/page-seo";
import { LABELS, ROUTES, TOP_LEVEL_LINKS } from "@config";

import {
  IEvent,
  IImageGallery,
  ILandingPage,
  IProduct,
  IRelease,
  ISettings,
  IVideoGallery,
} from "@data-access";
import Container from "@material-ui/core/Container";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export type ILinkPageProps = {
  settings: ISettings;
  landingPage: ILandingPage;
  products: IProduct[];
  releases: IRelease[];
  videoGalleries: IVideoGallery[];
  imageGalleries: IImageGallery[];
  events: IEvent[];
};

export const LinkPage = ({
  products,
  videoGalleries,
  imageGalleries,
  releases,
  settings,
  landingPage,
  events,
}: ILinkPageProps) => {
  const { hero } = landingPage;

  return (
    <>
      {/* <PageNavBar settings={settings} /> */}
      <PageSeo pageTitle={["Links"]} settings={settings} />

      <Box sx={{ backgroundColor: "black" }}>
        {/* <Container maxWidth="sm" disableGutters>
          <SwipeableViews index={0} onChangeIndex={() => {}}>
            {hero?.images?.map((image) => {
              return (
                <Image
                  alt="background"
                  key={image.url}
                  src={image.url}
                  aspectRatio={16 / 9}
                />
              );
            })}
          </SwipeableViews>
        </Container> */}
        <Container sx={{ background: "#fff" }} maxWidth="sm">
          <Box sx={{ marginBottom: 2 }}>
            <Image
              alt={hero.title}
              src={hero.logo.url}
              aspectRatio={hero.logo.metadata.dimensions.aspectRatio}
            />
          </Box>

          <Typography variant="h4" gutterBottom align="center">
            {hero.subtitle}
          </Typography>

          {TOP_LEVEL_LINKS.map((item) => {
            return (
              <Button
                startIcon={item.icon}
                key={item.href}
                href={item.href}
                fullWidth
                size="large"
                variant="outlined"
                color="inherit"
                sx={{
                  marginBottom: 2,
                }}
              >
                {item.label}
              </Button>
            );
          })}

          <Typography variant="h4" gutterBottom align="center">
            Follow
          </Typography>
          {settings.band.platformLinks.map((link) => {
            return (
              <PlatformButton
                key={link.url}
                href={link.url}
                size="large"
                platformName={link.platform.name}
                appIconSrc={link.platform.appIconUrl}
                sx={{ marginBottom: 2 }}
              />
            );
          })}

          <PageFooterButt />
        </Container>
      </Box>
    </>
  );
};
