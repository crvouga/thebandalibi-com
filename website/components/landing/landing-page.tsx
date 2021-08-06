import { Button, Image } from "@components/generic";
import { NavLinks } from "@components/shared";
import { ROUTES, TOP_LEVEL_LINKS } from "@config";
import { ILandingPage, ISettings } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NextImage from "next/image";
import React from "react";
import { PageSeo } from "../shared/page-wrapper/page-seo";
import classes from "./landing-page.module.css";
import { motion, AnimatePresence } from "framer-motion";

export type ILandingPageProps = {
  landingPage: ILandingPage;
  settings: ISettings;
};

export const LandingPage = ({ settings, landingPage }: ILandingPageProps) => {
  const { hero } = landingPage;

  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex) => {
        return (imageIndex + 1) % hero.images.length;
      });
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [hero.images.length]);

  return (
    <>
      <PageSeo settings={settings} pageTitle={["Official Site"]} />

      <Box
        className={classes.dim}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100vw",
          height: "100%",
          zIndex: -1,
        }}
      >
        <AnimatePresence>
          {hero.images.map(
            (image, index) =>
              index === imageIndex && (
                <motion.div
                  key={image.url}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <NextImage
                    src={hero.images[imageIndex].url}
                    objectFit="cover"
                    layout="fill"
                    priority
                    alt="background image"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </Box>

      <Box
        sx={{
          position: "absolute",
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
          <Box sx={{ margin: "auto", width: "15rem", marginBottom: 2 }}>
            <Image
              alt="logo"
              aspectRatio={hero.logo.metadata.dimensions.aspectRatio}
              priority
              src={hero.logo.url}
              className={classes.invert}
            />
          </Box>

          <Typography variant="h3" sx={{ marginBottom: 4 }}>
            {hero.subtitle}
          </Typography>

          <Container maxWidth="xs" disableGutters sx={{ marginBottom: 2 }}>
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

          <Container disableGutters>
            <NavLinks
              ListProps={{
                sx: {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                },
              }}
              ListItemTextProps={{
                primaryTypographyProps: {
                  variant: "button",
                },
              }}
              links={TOP_LEVEL_LINKS}
            />
          </Container>
        </Box>
      </Box>
    </>
  );
};
