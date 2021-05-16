import { IHero } from "@core";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Image from "next/image";
import { ButtonLink } from "../shared/clickable";
import { useTimeoutSteps } from "./hooks";

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const theme = useTheme();

  const currentStep = useTimeoutSteps({
    stepCount: 3,
    timeout: (1 / 3) * 1000,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
      height="100vh"
      maxHeight={theme.breakpoints.values.md}
    >
      <Fade in={currentStep >= 1}>
        <Box
          zIndex={-1}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        >
          <Image
            priority
            objectFit="cover"
            alt={`hero background image ${hero.title}`}
            layout="fill"
            src={hero.backgroundImage.url}
          />
        </Box>
      </Fade>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginBottom={18}
      >
        <Container maxWidth="sm">
          <Zoom in={currentStep >= 2}>
            <Typography align="center" variant="h1" gutterBottom>
              <Box color="white">{hero.title}</Box>
            </Typography>
          </Zoom>
        </Container>

        <Zoom in={currentStep >= 3}>
          <ButtonLink
            href={hero.callToAction.url}
            variant="contained"
            size="large"
            color="primary"
            style={{
              fontSize: theme.typography.h5.fontSize,
            }}
          >
            {hero.callToAction.title}
          </ButtonLink>
        </Zoom>
      </Box>
    </Box>
  );
};
