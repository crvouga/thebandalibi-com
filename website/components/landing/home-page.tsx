import {
  CartDrawer,
  OpenCartFab,
  OpenCartIconButton,
} from "@components/commerce";
import { Button, Image } from "@components/generic";
import { PageFooter, PageSeo } from "@components/shared";
import { TOP_LEVEL_LINKS } from "@config";
import { ILandingPage, ISettings } from "@data-access";
import { AppBar, Toolbar, useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

export type IHomePageProps = {
  settings: ISettings;
  landingPage: ILandingPage;
};

export const HomePage = ({ settings, landingPage }: IHomePageProps) => {
  const { hero } = landingPage;
  const theme = useTheme();
  return (
    <>
      <PageSeo pageTitle={["Home"]} settings={settings} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
        }}
      >
        <OpenCartFab position={{ vertical: "top", horizontal: "right" }} />

        <Box sx={{ maxWidth: "240px", width: "100%" }}>
          <Image
            aspectRatio={hero.logo.metadata.dimensions.aspectRatio}
            priority
            src={hero.logo.url}
            alt={settings.band.name}
          />
        </Box>

        <Typography
          color="inherit"
          variant="h2"
          textAlign="center"
          sx={{
            marginBottom: 2,
          }}
        >
          {hero.subtitle}
        </Typography>

        <Container maxWidth="sm">
          {TOP_LEVEL_LINKS.map((item) => (
            <Button
              startIcon={item.icon}
              key={item.href}
              href={item.href}
              fullWidth
              size="large"
              variant="contained"
              color="inherit"
              sx={{
                marginBottom: 2,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Container>

        <PageFooter
          contactEmailAddress={settings.band.contactEmailAddress}
          platformLinks={settings.band.platformLinks}
        />
      </Box>
    </>
  );
};
