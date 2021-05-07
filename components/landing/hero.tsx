import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { IHero } from "@core";
import { ButtonLink } from "../shared/clickable";

export const Hero = (props: { hero: IHero }) => {
  const { hero } = props;

  const theme = useTheme();

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
      <Box
        zIndex={-1}
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
      >
        <Image
          priority
          objectFit="cover"
          alt={`hero background image ${hero.title}`}
          layout="fill"
          src={hero.backgroundImage.url}
        />
      </Box>

      <Container maxWidth="sm">
        <Typography align="center" variant="h1">
          <Box color="white">{hero.title}</Box>
        </Typography>
      </Container>

      <ButtonLink
        href={hero.callToAction.url}
        variant="contained"
        size="large"
        color="primary"
      >
        {hero.callToAction.title.toUpperCase()}
      </ButtonLink>
    </Box>
  );
};
