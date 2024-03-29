import { Button, Image } from "@components/generic";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { AnimatePresence, motion } from "framer-motion";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import classes from "./hero.module.css";

const SlideShow = ({
  timeout,
  images,
}: {
  timeout: number;
  images: { src: string; alt: string }[];
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex) => {
        return (imageIndex + 1) % images.length;
      });
    }, timeout);

    return () => {
      clearInterval(interval);
    };
  }, [timeout, images.length]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={images[imageIndex].src}
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
          src={images[imageIndex].src}
          objectFit="cover"
          layout="fill"
          priority
          alt=""
        />
      </motion.div>
    </AnimatePresence>
  );
};

export const Hero = ({
  logo,
  tagline,
  backgroundImages,
  slideshowTimeout,
  primaryAction,
  secondaryAction,
}: {
  logo: {
    src: string;
    alt: string;
    aspectRatio: number;
  };
  tagline: string;
  backgroundImages: {
    src: string;
    alt: string;
  }[];
  slideshowTimeout: number;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Box
        className={classes.dim}
        sx={{
          backgroundColor: "#101010",
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <SlideShow timeout={slideshowTimeout} images={backgroundImages} />
      </Box>

      <Box sx={{ width: "18rem" }}>
        <Image
          aspectRatio={logo.aspectRatio}
          priority
          src={logo.src}
          alt={logo.alt}
        />
      </Box>

      <Box sx={{ color: "#fff" }}>
        <Typography
          color="inherit"
          variant="h4"
          textAlign="center"
          sx={{
            marginBottom: 2,
          }}
        >
          {tagline}
        </Typography>
      </Box>

      <Container maxWidth="sm" sx={{ display: "flex" }}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ marginRight: 2 }}
          href={primaryAction.href}
        >
          {primaryAction.label}
        </Button>

        <Button
          fullWidth
          variant="contained"
          color="inherit"
          size="large"
          href={secondaryAction.href}
        >
          {secondaryAction.label}
        </Button>
      </Container>
    </Box>
  );
};
