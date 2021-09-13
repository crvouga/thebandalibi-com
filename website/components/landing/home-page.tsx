import { Button, Image, PlatformButton } from "@components/generic";

import { NavButtons, PageEnd, PageFooterContact } from "@components/shared";
import { CALL_TO_ACTIONS, LABELS, LEGAL_LINKS, TOP_LEVEL_LINKS } from "@config";
import { ILandingPage, ISettings } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import { createMailToUrl } from "@utility";

export type IHomePageProps = {
  settings: ISettings;
  landingPage: ILandingPage;
};

export const HomePage = ({ settings, landingPage }: IHomePageProps) => {
  const { hero } = landingPage;
  const theme = useTheme();
  return (
    <>
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
        <Image
          src={hero.images[1].url}
          aspectRatio={16 / 9} //hero.images[0].metadata.dimensions.aspectRatio}
          alt=""
          priority
        />

        <Box sx={{ maxWidth: "240px", width: "100%" }}>
          <Image
            aspectRatio={hero.logo.metadata.dimensions.aspectRatio}
            priority
            src={hero.logo.url}
            alt=""
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

          <Typography variant="h2" align="center" gutterBottom>
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
                variant="contained"
              />
            );
          })}

          <Typography variant="h2" align="center" gutterBottom>
            Contact
          </Typography>

          <Button
            color="inherit"
            variant="contained"
            fullWidth
            startIcon={<EmailIcon />}
            sx={{ marginBottom: 4 }}
            href={createMailToUrl({
              emailAddress: settings.band.contactEmailAddress,
            })}
          >
            Email
          </Button>

          <Typography variant="h3" align="center" gutterBottom>
            Legal
          </Typography>

          <NavButtons
            links={LEGAL_LINKS}
            BoxProps={{
              sx: {
                flexDirection: "column",
                marginBottom: 2,
              },
            }}
          />
        </Container>

        <PageEnd />
      </Box>
    </>
  );
};
