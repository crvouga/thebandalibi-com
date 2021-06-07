import { IHero } from "@core";
import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import { Button } from "@ui";
import Image from "next/image";
import { useTimeoutSteps } from "./hooks";

const useStyles = makeStyles(() => ({
  backgroundImage: {
    // filter: "invert(1)",
  },
}));

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const theme = useTheme();

  const classes = useStyles();

  const currentStep = useTimeoutSteps({
    stepCount: 4,
    timeout: theme.transitions.duration.enteringScreen,
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
      <Fade
        in={currentStep >= 2}
        timeout={theme.transitions.duration.enteringScreen}
      >
        <Box
          zIndex={-1}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
        >
          <Image
            className={classes.backgroundImage}
            alt={`hero background image ${hero.title}`}
            priority
            objectFit="cover"
            layout="fill"
            src={hero.mainImage.url}
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
        <Container maxWidth="md">
          <Zoom
            in={currentStep >= 3}
            timeout={theme.transitions.duration.enteringScreen}
          >
            <Typography align="center" variant="h1" gutterBottom>
              {/* {hero.title} */}
              <Box color="white">{hero.title}</Box>
            </Typography>
          </Zoom>
        </Container>

        <Zoom
          in={currentStep >= 4}
          timeout={theme.transitions.duration.enteringScreen}
        >
          <Button
            href={hero.callToAction.url}
            variant="contained"
            size="large"
            color="primary"
            style={{
              fontSize: theme.typography.h6.fontSize,
            }}
          >
            {hero.callToAction.title}
          </Button>
        </Zoom>
      </Box>
    </Box>
  );
};
