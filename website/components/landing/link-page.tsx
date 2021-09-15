import { Button, Image } from "@components/generic";
import { PageFooter, PageSeo } from "@components/shared";
import { TOP_LEVEL_LINKS } from "@config";
import { content, IGridLandingPage, ISettings } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";

export type ILinkPageProps = {
  settings: ISettings;
  landingPage: IGridLandingPage;
};

export const getLinkPageProps = async (): Promise<ILinkPageProps> => {
  return {
    landingPage: await content.landingPage.get(),
    settings: await content.settings.get(),
  };
};

export const LinkPage = ({ settings, landingPage }: ILinkPageProps) => {
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
          background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        }}
      >
        <Box sx={{ maxWidth: "240px", width: "100%" }}>
          <Image
            aspectRatio={hero.logo.metadata.dimensions.aspectRatio}
            priority
            src={hero.logo.url}
            alt={settings.band.name}
          />
        </Box>

        <Typography
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
