import { Button, Image } from "@components/generic";
import { ROUTES } from "@config";
import { ILandingPage, ISettings } from "@data-access";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NextImage from "next/image";
import React from "react";
import { PageSeo } from "../shared/page-wrapper/page-seo";
import classes from "./landing-page.module.css";

export type ILandingPageProps = {
  landingPage: ILandingPage;
  settings: ISettings;
};

export const LandingPage = ({ settings, landingPage }: ILandingPageProps) => {
  const theme = useTheme();

  const { hero } = landingPage;

  return (
    <>
      <PageSeo settings={settings} pageTitle={["Official Site"]} />

      <Box
        className={classes.dim}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <NextImage
          className={classes.backgroundImage}
          objectFit="cover"
          layout="fill"
          priority
          alt="background image"
          src={hero.images[0].url}
        />
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingX: 2,
          }}
        >
          <Box sx={{ margin: "auto", width: "15rem", paddingBottom: 2 }}>
            <Image
              alt="logo"
              aspectRatio={hero.logo.metadata.dimensions.aspectRatio}
              priority
              src={hero.logo.url}
              className={
                theme.palette.mode === "dark" ? classes.invert : undefined
              }
            />
          </Box>

          <Typography variant="h2" gutterBottom>
            {hero.subtitle}
          </Typography>

          <Container maxWidth="xs" disableGutters>
            <Button
              variant="contained"
              size="large"
              fullWidth
              href={ROUTES.home()}
              endIcon={<ArrowForwardIcon />}
            >
              Enter Site
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  );
};
