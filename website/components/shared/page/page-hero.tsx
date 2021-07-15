import { useTheme } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export const PageHero = ({ hero }: { hero: { title: string } }) => {
  const theme = useTheme();

  const backgroundColor1 = theme.palette.secondary.light;
  const backgroundColor2 = theme.palette.secondary.dark;
  const background = `linear-gradient(${backgroundColor1}, ${backgroundColor2})`;
  const textColor = theme.palette.getContrastText(backgroundColor1);

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        background,
      }}
    >
      <Typography variant="h1" color={textColor}>
        {hero.title}
      </Typography>
    </Container>
  );
};
